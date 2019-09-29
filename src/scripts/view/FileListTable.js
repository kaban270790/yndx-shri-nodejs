const View = require('../redux/View.js');
module.exports = class FileListTableView extends View {

    /**
     * @param {{files: {}}} state
     * @returns {string}
     */
    render(state) {
        let files = [];
        for(let index in state.files) {
            if (state.files.hasOwnProperty(index)) {
                files.push(this.renderFile(state.files[index]));
            }
        }
        return files.join('');
    };

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
    };
};
