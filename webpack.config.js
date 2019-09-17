const path = require('path');

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: {
        'main': path.resolve(__dirname, 'src', 'scripts', 'main.js')
    },
    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].css',
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/i,
                use: [
                    'file-loader'
                ]
            }
        ],
    },
};
