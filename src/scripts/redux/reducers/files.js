const {TYPES} = require('../actions/files.js');

const files = (state = {}, action) => {
    switch (action.type) {
        case TYPES.SET_FILES:
            return setFiles(state, action);
        default:
            return state;
    }
};

/**
 * @param {*} state
 * @param {{files:[]}} action
 */
const setFiles = (state, action) => {
    if (action.files.length > 0) {
        return Object.assign({}, state, action.files);
    } else {
        return state;
    }
};

module.exports = files;
