const {execFile} = require('child_process');
const env = require('./../env.js');
/**
 *
 * @param {string} dir
 * @param {string} name
 * @param {string} url
 * @returns {Promise}
 */
module.exports = (dir, name, url) => {
    let options = [
        'clone',
        url,
        name
    ];
    return (new Promise((resolve, reject) => {
        execFile('git', options, {cwd: dir}, (err, data, errMess) => {
            if (err && errMess) {
                reject(errMess);
            }
            resolve();
        });
    }));
};
