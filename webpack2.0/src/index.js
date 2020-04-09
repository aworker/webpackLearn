/**
 * 1. 
 * 开发环境： webpack ./src/index.js -o ./build/build.js --mode=development
 * webpack会以index.js文件为入口文件 以build.js文件为出口文件，整体打包环境为开发环境。
 * 生产环境： webpack ./src/index.js -o ./build/build.js --mode=production
 * webpack会以index.js文件为入口文件 以build.js文件为出口文件，整体打包环境为生产环境。
 * 
 * 
 * 2.webpack 能处理js/json资源，不能处理css/img等资源；
 * 3.生产环境比开发环境多了一个压缩代码；
 * 4. webpack 将es6模块编译成浏览器识别的模块
 */


 import data from './data.json';
 console.log(data);

function add(x,y) {
    return x+y;
}

console.log(add(1,2));