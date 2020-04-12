// import '@babel/polyfill'; // 在生产的build.js文件中，会将这个const语法转化

const add = function add(x, y) {
  return x + y;
}; // es lint-dis able-ne xt-line 表示下一行代码不被eslint检查
// eslint-disable-next-line


console.log(add(2, 4));
const promise = new Promise(((resolve) => {
  setTimeout(() => {
    console.log('定时器执行完毕了啊~');
    resolve();
  }, 1000);
}));
console.log(promise);
