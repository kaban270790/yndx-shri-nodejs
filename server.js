const express = require('express');
const {argv} = require('yargs');
const fs = require('fs');
const {resolve: pathResolve} = require('path');
const uriReposList = '/api/repos';
const uriCommitHash = '/api/repos/:repositoryId/commits/:commitHash?';
const getCommits = require('./src/git/getCommit.js');
const getReposList = require('./src/getReposList.js');
if (!argv.path || argv.path.length === 0) {
    throw new Error("Empty require argument 'path'");
}
const reposDir = pathResolve(__dirname, argv.path);
(new Promise((resolve, reject) => {
    fs.stat(reposDir, ((errReposDir, stats) => {
        if (errReposDir) {
            reject(errReposDir.message)
        }
        if (!stats.isDirectory()) {
            reject(`Path ${reposDir} incorrect`);
        }
        resolve();
    }));
})).then(() => {
    const server = express();
    server.get(uriReposList, (req, res) => {
        getReposList(reposDir).then(files => {
            res.json(files);
        }).catch(reason => {
            res.end({error: reason});
        });
    });
    server.get(uriCommitHash, (req, res) => {
        //todo тут бы проверку как минимум на существование папки сделать
        /** @param {{params:{repositoryId:string, commitHash:string}}} req */
        getCommits(pathResolve(reposDir, req.params.repositoryId), req.params.commitHash).then(commits => {
            res.json(commits);
        }).catch(reason => {
            res.json({error: reason});
        });
    });
    server.listen(3000);
}).catch(reason => {
    throw new Error(reason);
});
