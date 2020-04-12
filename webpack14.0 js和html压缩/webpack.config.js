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

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
            , minify:{
                collapseWhitespace:true,
                removeComments:true
            }

        })
    ],
    mode: 'development',
    // mode: 'production',
};