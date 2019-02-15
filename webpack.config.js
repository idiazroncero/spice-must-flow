const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/assets/js/es6/script.js',
    output: {
        path: path.resolve(__dirname, './src/assets/js/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};