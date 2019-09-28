const TYPES = {
    SET_FILES: 'SET_FILES',
};

const actions = {
    setFilesAction: (files) => {
        return {
            type: TYPES.SET_FILES,
            files: files,
        };
    },
};

module.exports = {TYPES, actions};
