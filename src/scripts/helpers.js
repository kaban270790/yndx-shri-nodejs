/**
 * @param {{name: string}} file
 * @param {string} filter
 *
 * @return boolean
 */
const isShowFile = function (file, filter) {
    const regExp = new RegExp(filter, 'gi');
    return regExp.test(file.name);
};

module.exports = {isShowFile};
