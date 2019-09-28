let {TYPES, actions} = require('./Action.js');

module.exports = class Store {
    /**
     * {Function}
     */
    _reducer;
    /**
     * @type {Function[]}
     */
    _listeners = [];
    /**
     * @type {*}
     */
    _state = undefined;

    /**
     * @param {Function} reducer
     */
    constructor(reducer) {
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
};
