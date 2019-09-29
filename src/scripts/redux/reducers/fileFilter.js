const {TYPES} = require('../actions/fileFilter.js');

const files = (state = {value: ''}, action) => {
    switch (action.type) {
        case TYPES.UPDATE_FILE_FILTER:
            return updateFilter(state, action);
        default:
            return state;
    }
};

/**
 * @param {*} state
 * @param {{filter:[]}} action
 */
const updateFilter = (state, action) => {
    return Object.assign({}, state, {value: action.filter});
};

module.exports = files;
