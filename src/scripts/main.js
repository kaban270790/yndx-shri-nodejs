require("../scss/main.scss");
const Store = require('./redux/Store.js');
const reducer = require('./redux/reducer.js');

let store = new Store(reducer);

//todo это временная конструкция, т.к. пока что есть возможность вставить только этот элемент в дерево DOM
const FileFilter = require('./view/FileFilter.js');
const FileFilterContainer = document.getElementsByClassName('FileFilter')[0];
new FileFilter(FileFilterContainer, store);


//todo: временный блок, т.к. нет пока что связи с серверной частью
const mockFiles = require('../../mockFiles.json');
const {actions} = require('./redux/actions/files.js');
store.subscribe((store) => {
    console.log(store);
});
store.dispatch(actions.setFilesAction(mockFiles.files));
