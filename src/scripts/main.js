require("../scss/main.scss");
const Store = require('./redux/Store.js');
const reducer = require('./redux/reducer.js');

let store = new Store(reducer);
