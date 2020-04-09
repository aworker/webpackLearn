/**
 * webpack.config.js 是webpack的配置文件，其作用是指示webpack干什么活，干那些活。
 */

 //resolve 是用来拼接绝对路径的方法
 const {resolve} = require('path');

 module.exports = {
     //webpack config

     //入口文件
     entry: './src/index.js',
     output: {
         filename:'build.js',

         //__dirname是nodejs中的一个变量，代表当前文件的绝对路径
         path: resolve(__dirname,'build')
     },

     //loader配置
     module:{
         rules: [
             //loader 的详细配置
             {   
                 //匹配那些文件
                 test:/\.css$/,
                 //用那些loader处理匹配上的文件  
                 use:[  //use 数组中的loader执行顺序为：从右向左，从下到上依次执行
                     //创建style标签，将css-loader创建的js中的样式资源插入进去，添加到head中生效
                     'style-loader',
                     //将css文件变成commonjs模块加载到js中，里面是样式字符串
                     'css-loader'
                 ]
             }
         ]
     },
     //plugins 配置
     plugins: [],
     mode:'development'

 }