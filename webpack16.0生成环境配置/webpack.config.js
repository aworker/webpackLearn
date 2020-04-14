const {resolve} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

//定义nodeJs的环境变量决定package.json文件中的browserlist使用哪个环境
process.env.NODE_ENV = 'production';

//复用loader
const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader'
    //兼容性处理
    , {
        //还需要在package.json中定义browserlist
        loader: "postcss-loader",
        options: {
            ident: 'postcss',
            plugins: () => [
                require('postcss-preset-env')()
            ]
        }
    }
];

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            //处理css和less文件
            {
                test: /\.css$/,
                use: [
                    ...commonCssLoader
                ]
            }
            , {
                test: /\.less$/,
                use: [
                    ...commonCssLoader
                    , 'less-loader'
                ]
            }
            , { //js语法检查，在package.json 中添加eslintConfig配置
                test: /\.js$/,
                exclude: /node_modules/,
                //优先执行
                enforce: "pre",
                loader: 'eslint-loader'
                , options: {
                    fix: true
                }
            }
            , {
                //js兼容性处理
                test: /\.js$/
                , exclude: /node_modules/
                , loader: 'babel-loader'
                , options:
                    {
                        presets: [
                            [

                                '@babel/preset-env',
                                {
                                    useBuiltIns:'usage'
                                    ,corejs:{version:3},
                                    targets:{
                                        chrome:'60',
                                        firefox:'50'
                                    }
                                }
                            ]

                        ]
                    }


            }
            ,{
            test:/\.(jpg|png|gif)/
                ,loader:'url-loader'
                , options: {
                    limit:8*1024,
                    name:'[hash:10].[ext]'
                    ,outputPath:'imgs'
                    ,esMoudle:false
                }
            }
            ,{ //专门处理html中的图片问题
             test:/\.html$/
            , loader: 'html-loader'

            }
            ,{ //其它文件原封不动的搬过去
                exclude: /\.(js|css|les|html|jpg|png|gif)/,
                loader: 'file-loader',
                options:{
                    outputPath:'media'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        //压缩css文件
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html "
            , minify: {
                collapseWhitespace:true
                ,removeComments:true
            }
        })
    ],
    mode: "production"
}