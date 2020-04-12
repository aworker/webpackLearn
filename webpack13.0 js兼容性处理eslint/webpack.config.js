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
                test: /\.js$/,
                //排除对第三方库的检查
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    //自动修复eslint错误
                    fix: true

                }
            },
            //js代码兼容性处理
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    //语法转换器，只能转化普通语法，
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                //实现按需兼容
                                useBuiltIns: 'usage',
                                //指定core-js版本
                                corejs: {
                                    version: 3
                                },
                                //指定兼容性做到哪个版本
                                targets: {
                                    chrome: '60',
                                    firefox: '50',
                                    ie: '9',
                                    safari: '10',
                                    edge: '17'
                                }
                            }
                        ]
                    ]
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