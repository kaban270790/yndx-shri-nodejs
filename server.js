const express = require('express');
const {argv} = require('yargs');
const fs = require('fs');
const {resolve: pathResolve} = require('path');
const routes = require('./src/routes.json');
const getCommits = require('./src/git/getCommit.js');
const getDiff = require('./src/git/getDiff.js');
const getReposList = require('./src/getReposList.js');
const getFileList = require('./src/git/getFileList.js');
const getFileBlob = require('./src/git/getFileBlob.js');
const env = require('./src/env.js');
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
    server.get(routes.reposList, (req, res) => {
        getReposList(reposDir).then(files => {
            res.json(files);
        }).catch(reason => {
            res.end({error: reason});
        });
    });
    server.get(routes.commitList, (req, res) => {
        //todo тут бы проверку как минимум на существование папки сделать
        /** @param {{params:{repositoryId:string, commitHash:string}}} req */
        getCommits(pathResolve(reposDir, req.params.repositoryId), req.params.commitHash).then(commits => {
            res.json(commits);
        }).catch(reason => {
            res.json({error: reason});
        });
    });
    server.get(routes.commitDiff, (req, res) => {
        //todo тут бы проверку как минимум на существование папки сделать
        /** @param {{params:{repositoryId:string, commitHash:string}}} req */
        getDiff(pathResolve(reposDir, req.params.repositoryId), req.params.commitHash).then(dataDiff => {
            res.json(dataDiff);
        }).catch(reason => {
            res.json({error: reason});
        });
    });
    server.get([routes.filesList, routes.filesListRoot], (req, res) => {
        //todo тут бы проверку как минимум на существование папки сделать
        /** @param {{params:{repositoryId:string, commitHash:string|undefined, path:string|undefined}}} req */
        getFileList(
            pathResolve(reposDir, req.params.repositoryId),
            req.params.commitHash || null,
            req.params.path || null)
            .then(fileList => {
                res.json(fileList);
            })
            .catch(reason => {
                res.json({error: reason});
            });
    });
    server.get(routes.fileBlob, (req, res) => {
        /** @param {{params:{repositoryId:string, commitHash:string|undefined, pathToFile:string|undefined}}} req */
        getFileBlob(
            pathResolve(reposDir, req.params.repositoryId),
            req.params.commitHash,
            req.params.pathToFile)
            .then(file => {
                res.json({file});
            })
            .catch(reason => {
                res.json({error: reason});
            });
    });

    server.listen(env.SERVER_PORT);
}).catch(reason => {
    throw new Error(reason);
});
