require("../scss/main.scss");
const Store = require('./redux/Store.js');
const reducer = require('./redux/reducer.js');

let store = new Store(reducer);

//todo: временный блок, т.к. нет пока что связи с серверной частью
const mockFiles = require('../../mockFiles.json');
const {actions} = require('./redux/actions/files.js');
store.subscribe((store) => {
    console.log('11', store);
});
store.dispatch(actions.setFilesAction(mockFiles.files));
