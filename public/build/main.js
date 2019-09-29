/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mockFiles.json":
/*!************************!*\
  !*** ./mockFiles.json ***!
  \************************/
/*! exports provided: files, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"files\":[{\"name\":\"src\",\"ext\":\"folder\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\"public\",\"ext\":\"folder\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\".env.example\",\"ext\":\"text\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\".gitignore\",\"ext\":\"text\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\"README.md\",\"ext\":\"text\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\"README_STYLE.md\",\"ext\":\"text\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\"mockFiles.json\",\"ext\":\"code\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\"package-lock.json\",\"ext\":\"code\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\"package.json\",\"ext\":\"code\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\"server.js\",\"ext\":\"code\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"},{\"name\":\"webpack.config.js\",\"ext\":\"code\",\"hash\":\"6ac753fcfde69fdf8e332a06556dd72d85902748\",\"date\":\"Dec 29, 2017\",\"message\":\"Текст коммита\",\"committer\":\"kaban270790\"}]}");

/***/ }),

/***/ "./src/scripts/helpers.js":
/*!********************************!*\
  !*** ./src/scripts/helpers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {{name: string}} file
 * @param {string} filter
 *
 * @return boolean
 */
const isShowFile = function (file, filter) {
  const regExp = new RegExp(filter, 'gi');
  return regExp.test(file.name);
};

module.exports = {
  isShowFile
};

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");

const Store = __webpack_require__(/*! ./redux/Store.js */ "./src/scripts/redux/Store.js");

const reducer = __webpack_require__(/*! ./redux/reducer.js */ "./src/scripts/redux/reducer.js");

let store = new Store(reducer); //todo это временная конструкция, т.к. пока что есть возможность вставить только этот элемент в дерево DOM

const FileFilter = __webpack_require__(/*! ./view/FileFilter.js */ "./src/scripts/view/FileFilter.js");

const FileFilterContainer = document.getElementsByClassName('FileFilter')[0];
new FileFilter(FileFilterContainer, store);

const FileListTable = __webpack_require__(/*! ./view/FileListTable.js */ "./src/scripts/view/FileListTable.js");

const FileListTableContainer = document.getElementsByClassName('Table-Body')[0];
new FileListTable(FileListTableContainer, store);

const FileListMobile = __webpack_require__(/*! ./view/FileListMobile.js */ "./src/scripts/view/FileListMobile.js");

const FileListMobileContainer = document.getElementsByClassName('TableMobile')[0];
new FileListMobile(FileListMobileContainer, store); //todo: временный блок, т.к. нет пока что связи с серверной частью

const mockFiles = __webpack_require__(/*! ../../mockFiles.json */ "./mockFiles.json");

const {
  actions
} = __webpack_require__(/*! ./redux/actions/files.js */ "./src/scripts/redux/actions/files.js");

store.subscribe(store => {
  console.log(store);
});
store.dispatch(actions.setFilesAction(mockFiles.files));

/***/ }),

/***/ "./src/scripts/redux/Action.js":
/*!*************************************!*\
  !*** ./src/scripts/redux/Action.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const TYPES = {
  INIT: '@@init'
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

/***/ }),

/***/ "./src/scripts/redux/Store.js":
/*!************************************!*\
  !*** ./src/scripts/redux/Store.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let {
  TYPES,
  actions
} = __webpack_require__(/*! ./Action.js */ "./src/scripts/redux/Action.js");

module.exports = (_temp = class Store {
  /**
   * {Function}
   */

  /**
   * @type {Function[]}
   */

  /**
   * @type {*}
   */

  /**
   * @param {Function} reducer
   */
  constructor(reducer) {
    _defineProperty(this, "_reducer", void 0);

    _defineProperty(this, "_listeners", []);

    _defineProperty(this, "_state", undefined);

    this._reducer = reducer;
    this.dispatch(actions.init());
  }
  /**
   * @returns {*}
   */


  getState() {
    return this._state;
  }
  /**
   * @param {Function} subscriber
   * @returns {Function}
   */


  subscribe(subscriber) {
    this._listeners.push(subscriber);

    return () => {
      this._listeners.splice(this._listeners.indexOf(subscriber), 1);
    };
  }
  /**
   * @param {{type:string}} action
   */


  dispatch(action) {
    this._state = this._reducer(this._state, action);

    this._notifyListeners();
  }

  _notifyListeners() {
    this._listeners.forEach(listener => listener(this._state));
  }

}, _temp);

/***/ }),

/***/ "./src/scripts/redux/View.js":
/*!***********************************!*\
  !*** ./src/scripts/redux/View.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = (_temp = class View {
  /**
   * @param {Node}
   */

  /**
   * @param {Store}
   */

  /**
   * @param {Function}
   */

  /**
   * @param {Node} el
   * @param {Store} store
   */
  constructor(el, store) {
    _defineProperty(this, "_el", void 0);

    _defineProperty(this, "_store", void 0);

    _defineProperty(this, "_unsubscribe", void 0);

    this._el = el;
    this._store = store;
    this._unsubscribe = store.subscribe(this._preRender.bind(this));

    this._preRender(store.getState());
  }
  /**
   * @param {*} state
   */


  _preRender(state) {
    const renderHTML = this.render(state);
    console.group(this.toString());
    console.log(renderHTML);
    console.log(this._el.innerHTML);
    console.groupEnd();

    if (renderHTML !== this._el.innerHTML) {
      this._el.innerHTML = renderHTML;
    }
  }
  /**
   * @param {*} state
   */


  render(state) {
    throw new Error("Required method implementation");
  }

  destroy() {
    this._el.innerHTML = '';

    this._unsubscribe();
  }

}, _temp);

/***/ }),

/***/ "./src/scripts/redux/actions/fileFilter.js":
/*!*************************************************!*\
  !*** ./src/scripts/redux/actions/fileFilter.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const TYPES = {
  UPDATE_FILE_FILTER: 'UPDATE_FILE_FILTER'
};
const actions = {
  updateFileFilter: filter => {
    return {
      type: TYPES.UPDATE_FILE_FILTER,
      filter: filter
    };
  }
};
module.exports = {
  TYPES,
  actions
};

/***/ }),

/***/ "./src/scripts/redux/actions/files.js":
/*!********************************************!*\
  !*** ./src/scripts/redux/actions/files.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const TYPES = {
  SET_FILES: 'SET_FILES'
};
const actions = {
  setFilesAction: files => {
    return {
      type: TYPES.SET_FILES,
      files: files
    };
  }
};
module.exports = {
  TYPES,
  actions
};

/***/ }),

/***/ "./src/scripts/redux/reducer.js":
/*!**************************************!*\
  !*** ./src/scripts/redux/reducer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  TYPES
} = __webpack_require__(/*! ./Action.js */ "./src/scripts/redux/Action.js");

const files = __webpack_require__(/*! ./reducers/files.js */ "./src/scripts/redux/reducers/files.js");

const fileFilter = __webpack_require__(/*! ./reducers/fileFilter.js */ "./src/scripts/redux/reducers/fileFilter.js");

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
    files: files(state.files, action),
    fileFilter: fileFilter(state.fileFilter, action)
  });
};

/***/ }),

/***/ "./src/scripts/redux/reducers/fileFilter.js":
/*!**************************************************!*\
  !*** ./src/scripts/redux/reducers/fileFilter.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  TYPES
} = __webpack_require__(/*! ../actions/fileFilter.js */ "./src/scripts/redux/actions/fileFilter.js");

const files = (state = {
  value: ''
}, action) => {
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
  return Object.assign({}, state, {
    value: action.filter
  });
};

module.exports = files;

/***/ }),

/***/ "./src/scripts/redux/reducers/files.js":
/*!*********************************************!*\
  !*** ./src/scripts/redux/reducers/files.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  TYPES
} = __webpack_require__(/*! ../actions/files.js */ "./src/scripts/redux/actions/files.js");

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

/***/ }),

/***/ "./src/scripts/view/FileFilter.js":
/*!****************************************!*\
  !*** ./src/scripts/view/FileFilter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const View = __webpack_require__(/*! ../redux/View.js */ "./src/scripts/redux/View.js");

const INPUT_PLACEHOLDER = 'Фильтр файлов';

const {
  actions
} = __webpack_require__(/*! ../redux/actions/fileFilter.js */ "./src/scripts/redux/actions/fileFilter.js");

module.exports = (_temp = class FileFilterView extends View {
  constructor(el, store) {
    super(el, store);

    _defineProperty(this, "_keyUpTimeout", void 0);

    this._onKeyUp = this._keyUp.bind(this);

    this._el.addEventListener('keyup', this._onKeyUp);
  }
  /**
   * @param {{fileFilter: string}} state
   * @returns {string}
   */


  render(state) {
    return `<input class="Input" placeholder="${INPUT_PLACEHOLDER}" value="">`;
  }

  _keyUp(e) {
    clearTimeout(this._keyUpTimeout);
    this._keyUpTimeout = setTimeout(() => {
      this._store.dispatch(actions.updateFileFilter(e.target.value || ''));
    }, 250);
  }

  destroy() {
    super.destroy();

    this._el.removeEventListener('keyup', this._onKeyUp);
  }

}, _temp);

/***/ }),

/***/ "./src/scripts/view/FileListMobile.js":
/*!********************************************!*\
  !*** ./src/scripts/view/FileListMobile.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const View = __webpack_require__(/*! ../redux/View.js */ "./src/scripts/redux/View.js");

const {
  isShowFile
} = __webpack_require__(/*! ../helpers.js */ "./src/scripts/helpers.js");

module.exports = class FileListView extends View {
  /**
   * @param {{files: {}, fileFilter:{value:string}}} state
   * @returns {string}
   */
  render(state) {
    let files = [];

    for (let index in state.files) {
      if (state.files.hasOwnProperty(index) && isShowFile(state.files[index], state.fileFilter.value)) {
        files.push(this.renderFile(state.files[index]));
      }
    }

    return files.join('');
  }

  /**
   * @param {{name: string,ext:string,hash:string,date:string,message:string,committer: string}} file
   * @returns {string}
   */
  renderFile(file) {
    const shortHash = file.hash.slice(0, 6);
    return `
            <div class="List-Item List-Item-borderB-gray ListItem-borderB-gray">
                <div class="IconPlus List">
                    <div class="List-Item List-Item-indentV-5">
                        <div class="IconPlus">
                            <div class="IconPlus-Text List">
                                <div class="List-Item List-Item-indentV-5">
                                    <div class="IconPlus">
                                        <div class="IconPlus-Icon IconPlus-Icon-marginR-8 IconFile IconFile-ext-${file.ext}"></div>
                                        <div class="IconPlus-Text Text Text-size-14 Text-lHeight-20 Text-color-black Text-width-bold">${file.name}</div>
                                    </div>
                                </div>
                                <div class="List-Item List-Item-indentV-5">
                                            <span class="Text Text-size-14 Text-lHeight-20 Text-color-black">${file.message}</span>
                                </div>
                                <div class="List-Item List-Item-indentV-5">
                                    <a class="Text Text-color-link Text-size-14 Text-lHeight-20 Text-underline-non Text-marginR-8"
                                       href="#">${shortHash}</a>
                                    <span class="Text Text-color-black Text-size-14 Text-lHeight-20">
                                                by ${file.committer}, ${file.date}
                                            </span>
                                </div>
                            </div>
                            <div class="IconPlus-Icon IconPlus-Icon-marginL-8 IconNav IconNav-arrow-right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
  }

};

/***/ }),

/***/ "./src/scripts/view/FileListTable.js":
/*!*******************************************!*\
  !*** ./src/scripts/view/FileListTable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const View = __webpack_require__(/*! ../redux/View.js */ "./src/scripts/redux/View.js");

const {
  isShowFile
} = __webpack_require__(/*! ../helpers.js */ "./src/scripts/helpers.js");

module.exports = class FileListTableView extends View {
  /**
   * @param {{files: {}, fileFilter:{value:string}}} state
   * @returns {string}
   */
  render(state) {
    let files = [];

    for (let index in state.files) {
      if (state.files.hasOwnProperty(index) && isShowFile(state.files[index], state.fileFilter.value)) {
        files.push(this.renderFile(state.files[index]));
      }
    }

    return files.join('');
  }

  /**
   * @param {{name: string,ext:string,hash:string,date:string,message:string,committer: string}} file
   * @returns {string}
   */
  renderFile(file) {
    const shortHash = file.hash.slice(0, 6);
    return `<tr class="Table-Row">
                <td class="Table-Cell Table-Cell-width-2 Table-Cell-borderB-light Table-Cell-indentH-8 Table-Cell-indentB-12 Table-Cell-indentT-18">
                    <div class="IconPlus">
                        <div class="IconPlus-Icon IconPlus-Icon-marginR-8 IconFile IconFile-ext-${file.ext}">
                        </div>
                        <div class="IconPlus-Text Text Text-lHeight-20 Text-size-14 Text-color-black Text-width-bold">
                            ${file.name}
                        </div>
                    </div>
                </td>
                <td class="Table-Cell Table-Cell-width-2 Table-Cell-borderB-light Table-Cell-indentH-8 Table-Cell-indentB-12 Table-Cell-indentT-18">
                    <a href="#" class="Text Text-color-link Text-underline-non Text-size-14 Text-lHeight-20">${shortHash}</a>
                </td>
                <td class="Table-Cell Table-Cell-width-4 Table-Cell-borderB-light Table-Cell-indentH-8 Table-Cell-indentB-12 Table-Cell-indentT-18">
                    <span class="Text Text-size-14 Text-lHeight-20 Text-color-black">${file.message}</span>
                </td>
                <td class="Table-Cell Table-Cell-width-2 Table-Cell-borderB-light Table-Cell-indentH-8 Table-Cell-indentB-12 Table-Cell-indentT-18">
                    <span class="Text Text-color-black Text-size-14 Text-lHeight-20">
                        <span class="Text-FirstSymbol">${file.committer.slice(0, 1)}</span>${file.committer.slice(1)}
                    </span>
                </td>
                <td class="Table-Cell Table-Cell-width-2 Table-Cell-borderB-light Table-Cell-indentH-8 Table-Cell-indentB-12 Table-Cell-indentT-18 Table-Cell-align-right">
                    <span class="Text Text-color-black Text-size-14 Text-lHeight-20">${file.date}</span>
                </td>
            </tr>`;
  }

};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "main.css";

/***/ })

/******/ });
//# sourceMappingURL=main.js.map