
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "build.js",
        path: resolve(__dirname, "build/js"),
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                //排除对第三方库的检查
                exclude:/node_modules/,
                loader: 'eslint-loader',
                options: {
                    //自动修复eslint错误
                    fix: true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
};