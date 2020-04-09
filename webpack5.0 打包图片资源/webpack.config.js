const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'build.js',
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
            test:/\.less$/,
            //多个loader用use关键字
            use:[
                'style-loader','css-loader','less-loader'    
            ]
          },
          {
              test:/\.(jpg|png|gif)$/,
              //单个可以用 loader关键字
              //下载 url-loader和file-loader(url-loader需要依赖它)
              loader:'url-loader',
              options:{
                  //图片小于8kb时，用base64处理。这样可以减少请求数量，但是会增加图片的体积。
                  limit:8*1024,
                  esModule:false,
                        //取图片hash的前10位，用原文件的拓展名
                  name:'[hash:10].[ext]'
              }
          },
          {
              test:/\.html$/,
              //专门处理html文件中的img图片的， 负责引用img图片，从而让url-loader能够进行打包处理
              loader:'html-loader'
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}