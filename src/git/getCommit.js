const {execFile} = require('child_process');
const countCommitOnPage = 2;
/**
 *
 * @param {string} reposDir
 * @param {string} commitHash
 * @returns {Promise}
 */
module.exports = (reposDir, commitHash) => {
    const commitDelimiter = '-----';
    const format = [commitDelimiter, '%H', '%at', '%s'].join('%n');
    let options = [
        `--format=${format}`,
        '-' + countCommitOnPage,
    ];
    if (commitHash) {
        options.push(commitHash);
    }
    options.unshift('log');
    return (new Promise((resolve, reject) => {
        execFile('git', options, {cwd: reposDir}, (err, data) => {
            if (err) {
                reject(err);
            }
            let commits = data.split(commitDelimiter)
                .map(value => value.trim())
                .filter(value => value.length > 0)
                .map(value => {
                    let commitData = value.trim().split("\n");
                    let hash = commitData.shift();
                    let timestamp = commitData.shift();
                    let source = commitData.join("/n");//todo подумать над парсингом
                    return {hash, timestamp, source};
                });
            resolve(commits);
        });
    }));
};
