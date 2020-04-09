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
    mode:'development'

}