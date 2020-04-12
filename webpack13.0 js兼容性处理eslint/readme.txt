兼容js的语法在不同的浏览器中都没错保证。

1、下载依赖啊,此方式只能解决一些基本的js语法兼容问题
    npm i babel-loader   @babel/core  @babel/preset-env -D

2、 下载 @babel/polyfill 可以解决所有的语法转化问题
    npm i @babel/polyfill -D
    使用的时候只需要 引入即可 import '@babel/polyfill';
    同时如果使用eslint做代码检查的话，需要 在eslintConfig中添加入下配置 "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    不然直接引用 @babel/polyfill 在eslint的语法中会报错。
3、 @babel/polyfill 的问题就是为了解决部分兼容性问题，把所有兼容性的解决都带入到代码里面了，导致js代码体积太大了。

4、 用corejs实现按需的兼容性处理
    npm i core-js -D

