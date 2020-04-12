本节说明js的语法检查

1、下载依赖啊
    npm i eslint-loader eslint

2、只检查自己项目的代码，不用检查第三方库的代码：

   exculde:/node_modules/

3、设计检查规则，在packjson中的eslintConfig中设计，推荐使用airbnb

4、下载airbnb的包
eslint-config-airbnb-base {need}   eslint  eslint-plugin-import