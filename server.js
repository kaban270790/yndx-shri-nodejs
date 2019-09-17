const express = require('express');
const {argv} = require('yargs');
const fs = require('fs');
const {resolve: pathResolve} = require('path');
const bodyParser = require('body-parser');
const routes = require('./src/routes.json');
const getCommits = require('./src/git/getCommit.js');
const getDiff = require('./src/git/getDiff.js');
const getReposList = require('./src/getReposList.js');
const getFileList = require('./src/git/getFileList.js');
const getFileBlob = require('./src/git/getFileBlob.js');
const gitClone = require('./src/git/clone.js');
const removeRepos = require('./src/removeRepos.js');
const env = require('./src/env.js');
const checkDirRepository = require('./src/checkDirRepository.js');
if (!argv.path || argv.path.length === 0) {
    throw new Error("Empty require argument 'path'");
}
(new Promise((resolve, reject) => {
    const reposDir = pathResolve(__dirname, argv.path);
    fs.stat(reposDir, ((errReposDir, stats) => {
        if (errReposDir) {
            reject(errReposDir.message)
        }
        if (!stats.isDirectory()) {
            reject(`Path ${reposDir} incorrect`);
        }

        resolve(reposDir);
    }));
})).then((reposDir) => {
    const server = express();
    server.use(express.static('public'));
    server.use(bodyParser.json());
    server.get(routes.reposList, (req, res) => {
        getReposList(reposDir).then(repositories => {
            res.json({repositories});
        }).catch(error => {
            res.status(400).end({error});
        });
    });
    server.get([routes.commitList, routes.commitListByPage], (req, res) => {
        checkDirRepository.isExist(reposDir, req.params.repositoryId)
            .then(reposPath => getCommits(reposPath, req.params.commitHash, req.params.page || null))
            .then(result => {
                res.json(result);
            })
            .catch(error => {
                res.status(400).json({error});
            });
    });
    server.get(routes.commitDiff, (req, res) => {
        checkDirRepository.isExist(reposDir, req.params.repositoryId)
            .then(reposPath => getDiff(reposPath, req.params.commitHash))
            .then(diff => {
                res.json({diff});
            })
            .catch(error => {
                res.status(400).json({error});
            });
    });
    server.get([routes.filesList, routes.filesListRoot], (req, res) => {

        checkDirRepository.isExist(reposDir, req.params.repositoryId)
            .then(reposPath => getFileList(reposPath, req.params.commitHash || null, req.params.path || null))
            .then(files => {
                res.json({files});
            })
            .catch(error => {
                res.status(400).json({error});
            });
    });
    server.get(routes.fileBlob, (req, res) => {
        checkDirRepository.isExist(reposDir, req.params.repositoryId)
            .then(reposPath => getFileBlob(reposPath, req.params.commitHash, req.params.pathToFile))
            .then(fileBlob => {
                res.json({fileBlob});
            })
            .catch(error => {
                res.status(400).json({error});
            });
    });
    server.post(routes.cloneRepos, (req, res) => {
        checkDirRepository.isNotExist(reposDir, req.params.repositoryId)
            .then(() => gitClone(reposDir, req.body.url, req.params.repositoryId || null))
            .then(() => {
                res.json({result: true});
            })
            .catch((error => {
                res.status(400).json({error});
            }));
    });
    server.delete(routes.removeRepos, (req, res) => {
        checkDirRepository.isExist(reposDir, req.params.repositoryId)
            .then(() => removeRepos(pathResolve(reposDir, req.params.repositoryId)))
            .then(() => {
                res.json({result: true});
            })
            .catch((error => {
                res.json({error});
            }));
    });
    server.all('*', (req, res) => {
        res.status(404)
            .json({"error": "Not found!"});
    });
    server.listen(env.SERVER_PORT);
}).catch(reason => {
    throw new Error(reason);
});
