/**
 * development config
 */
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename:'js/build.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules: [
            {
                //deal with less resource
                test:/\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                // deal with css resource
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                //deal image resource
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options: {
                    //small then ‘limit’ config will be compiled by unicode in js file
                    limit: 8*1024,
                    //     use hashcode's 10th and default extension name
                    name:'[hash:10].[ext]',
                    //determine output path for jpg,png,gif file
                    outputPath:'imgs'
                }
            },
            {
                //deal html img resource
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                //deal other resource
                exclude:/\.(html|css|js|less|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name:'[hash:10].[ext]',
                    outputPath:'media'
                }
            }
        ]
    },
    plugins: [
        //deal html file
        new HtmlWebpackPlugin({
            //the module html file for webpack to copy
            template:'./src/index.html'
        })
    ],
    devServer: {
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:8888,
        open:true
    },
    mode:'development'
}