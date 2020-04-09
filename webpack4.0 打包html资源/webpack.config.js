/**
 * loader: 1.下载 2.使用
 * plugins： 1.下载 2.引用 3.使用
 */
const {resolve} = require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports= {
    entry:'./src/index.js',
    output: {
        filename:'build.js',
        path:resolve(__dirname,'build')
    },
    module: {
        rules:[

        ]
    },
    plugins:[
        //默认创建一个空的html文件，自动引入打包输出的所有资源（js/css)
        new HtmlWebpackPlugin({
            //复制 src/index.html 文件，并自动引入打包输出的所有资源
            template:'./src/index.html'
        }
        )
    ],
    mode:'development'

}