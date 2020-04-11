

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//设置node js 的环境变量
// process.env.NODE_ENV = 'development';

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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            ident:'postcss',
                            plugins:() => [
                                require('postcss-preset-env')()
                            ]
                        }
                    }
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
        }),
        //压缩css文件
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    mode:'development'
};