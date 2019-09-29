const TYPES = {
    INIT: '@@init',
};

const actions = {
    init: () => ({
        type: TYPES.INIT
    })
};

module.exports = {
    TYPES,
    actions
};

