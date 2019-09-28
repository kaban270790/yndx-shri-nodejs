const {TYPES} = require('./Action.js');
const files = require('./reducers/files.js');
const defaultState = {};

/**
 * @param {*} state
 * @param {{type:string, payload:*}} action
 */
module.exports = (state, action) => {
    if (state === undefined) {
        state = defaultState;
    }
    return Object.assign({}, state, {
        files: files(state.files, action)
    });
};
