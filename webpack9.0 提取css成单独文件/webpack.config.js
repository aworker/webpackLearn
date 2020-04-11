

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry: './src/js/index.js',
    output:{
        filename:'js/build.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //创建style标签，然后把样式放上去
                    // 'style-loader',
                    //取代style-loader，提取js中的css成为单独文件
                    MiniCssExtractPlugin.loader,
                    //将css文件整合到js文件
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',

        }),
        new MiniCssExtractPlugin({
            //指定css文件的输出位置，默认为main.css
            filename:'css/build.css'
        })
    ],
    mode:'development'
};