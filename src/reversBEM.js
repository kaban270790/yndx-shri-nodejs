const fs = require("fs");
const {argv} = require('yargs');
const {resolve: pathResolve} = require('path');

if (!argv.path || argv.path.length === 0) {
    throw new Error("Empty require argument 'path'");
}
const pathDir = pathResolve(__dirname, argv.path);
const readDir = function (dir) {
    fs.readdir(dir, {withFileTypes: true}, ((errReposDir, files) => {
        if (errReposDir) {
            console.error(errReposDir.message);
            process.exit();
        }
        files.map((fileStat) => {
            if (fileStat.isDirectory()) {
                readDir(pathResolve(dir, fileStat.name));
            } else if (fileStat.isFile()) {
                let file = pathResolve(dir, fileStat.name);
                (new Promise(function (resolve, reject) {
                    fs.readFile(file, ((err, data) => {
                            if (err) {
                                reject(err);
                            }
                            resolve(data);
                        }
                    ));
                })).then(value => {
                    return replace(value);
                }).then(value => {
                    return (new Promise((resolve, reject) => {
                        fs.writeFile(file, value, err => {
                            if (err) {
                                reject(err);
                            }
                            resolve(true);
                        });
                    }));
                }).catch(reason => {
                    console.error(reason);
                });
            }
        });

    }));
};

function replace(code) {
    let data = `${code}`;

    let map = {
        "__a": "-A",
        "__b": "-B",
        "__c": "-C",
        "__d": "-D",
        "__e": "-E",
        "__f": "-F",
        "__g": "-G",
        "__h": "-H",
        "__i": "-I",
        "__j": "-J",
        "__k": "-K",
        "__l": "-L",
        "__m": "-M",
        "__n": "-N",
        "__o": "-O",
        "__p": "-P",
        "__q": "-Q",
        "__r": "-R",
        "__s": "-S",
        "__t": "-T",
        "__u": "-U",
        "__v": "-V",
        "__w": "-W",
        "__x": "-X",
        "__y": "-Y",
        "__z": "-Z",
        "\\.a": ".A",
        "\\.b": ".B",
        "\\.c": ".C",
        "\\.d": ".D",
        "\\.e": ".E",
        "\\.f": ".F",
        "\\.g": ".G",
        "\\.h": ".H",
        "\\.i": ".I",
        "\\.j": ".J",
        "\\.k": ".K",
        "\\.l": ".L",
        "\\.m": ".M",
        "\\.n": ".N",
        "\\.o": ".O",
        "\\.p": ".P",
        "\\.q": ".Q",
        "\\.r": ".R",
        "\\.s": ".S",
        "\\.t": ".T",
        "\\.u": ".U",
        "\\.v": ".V",
        "\\.w": ".W",
        "\\.x": ".X",
        "\\.y": ".Y",
        "\\.z": ".Z",
    };

    for (let key in map) {
        let regexp = new RegExp(`(${key})`, "g");
        data = data.replace(regexp, map[key]);
    }

    return data;
}

readDir(pathDir);
