const {TYPES} = require('./Action.js');

const defaultState = {
};

/**
 * @param {*} state
 * @param {{type:string, payload:*}} action
 */
module.exports = (state, action) => {
    if (state === undefined) {
        state = defaultState;
    }
    switch (action.type) {
        case TYPES.INIT:
        default:
            return state;
    }
};
