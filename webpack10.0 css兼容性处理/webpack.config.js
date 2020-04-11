

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                    //创建style标签，然后把样式放上去
                    // 'style-loader',
                    //取代style-loader，提取js中的css成为单独文件
                    MiniCssExtractPlugin.loader,
                    //将css文件整合到js文件
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            ident:'postcss',
                            plugins:() => [
                                //postcss 的插件,帮助postcss找到package.json 中browsers list里面的配置，通过配置加载指定的兼容。
                                //默认用的是开发环境，只有设置 node 的环境变量次啊可以， process.env.NODE_ENV = development
                                /**
                                 * "browserslist": {
                                    "development": [
                                      "last 1 chrome version",  //开发环境兼容最新的chrome
                                      "last 1 firefox version",
                                        "last 1 safari version"
                                    ],
                                    "production":[
                                       ">0.2%",  //兼容市场占有率超过0.2%的浏览器
                                      "not dead", //已经死的浏览器不要了
                                      "not op_mini all"  //op_mini 浏览器不要了
                                    ]
                                  }
                                 */
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
        })
    ],
    mode:'development'
};