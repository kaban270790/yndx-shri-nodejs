const View = require('../redux/View.js');
const INPUT_PLACEHOLDER = 'Фильтр файлов';
const {actions} = require('../redux/actions/fileFilter.js');
module.exports = class FileFilterView extends View {

    _keyUpTimeout;

    constructor(el, store) {
        super(el, store);
        this._onKeyUp = this._keyUp.bind(this);
        this._el.addEventListener('keyup', this._onKeyUp);
    }

    /**
     * @param {{fileFilter: string}} state
     * @returns {string}
     */
    render(state) {
        return `<input class="Input" placeholder="${INPUT_PLACEHOLDER}" value="${state.fileFilter.value || ''}"/>`;
    };

    _keyUp(e) {
        clearTimeout(this._keyUpTimeout);
        this._keyUpTimeout = setTimeout(() => {
            this._store.dispatch(actions.updateFileFilter(e.target.value || ''));

        }, 250);
    };

    destroy() {
        super.destroy();
        this._el.removeEventListener('keyup', this._onKeyUp);
    }
};
