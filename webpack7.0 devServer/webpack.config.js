const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            //打包除了html，js，css资源以外的资源
            {
                exclude:/\.(css|js|html)$/,
                use:['file-loader']
            }
        ],    
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',

    //开发服务器devServer；用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    //开发服务器只会在内存中编译打包，不会有任何输出（build文件夹中没有输出）
    //本地安装指令  npm i webpack-dev-server -D
    //全局安装指令  npm i webpack-dev-server -g
    //本地启动指令为 npx webpack-dev-server （只在本地安装时）
    //全局启动指令为 webpack-dev-server(全局安装的时候)
    devServer: {
        contentBase: resolve(__dirname,'build'),
        //启用gzip压缩
        compress:true,
        port:8888,
        //自动打开浏览器
        open:true
    }
}