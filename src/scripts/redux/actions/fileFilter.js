const TYPES = {
    UPDATE_FILE_FILTER: 'UPDATE_FILE_FILTER',
};

const actions = {
    updateFileFilter: (filter) => {
        return {
            type: TYPES.UPDATE_FILE_FILTER,
            filter: filter,
        };
    },
};

module.exports = {TYPES, actions};
