module.exports = class View {
    /**
     * @param {Node}
     */
    _el;
    /**
     * @param {Store}
     */
    _store;
    /**
     * @param {Function}
     */
    _unsubscribe;

    /**
     * @param {Node} el
     * @param {Store} store
     */
    constructor(el, store) {
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
};
