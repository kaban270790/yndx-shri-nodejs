const View = require('../redux/View.js');
module.exports = class FileListView extends View {

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
    };
};
