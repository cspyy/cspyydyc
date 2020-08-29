// main.js要依赖a.js和b.js的方法，所以可以直接在这里导入以上文件
// 语法
// 导入a.js有两种导入法：
// 1、ES6的
// import bar from './bar';
// 2、Nodejs的
// require('模块名')
// 
var moduleA=require('./a');//因为模块后缀名是.js，所以可以省略不写 ./指的在当前目录中找
// var moduleB=require('./b.js');
import moduleB from './b.js';

// 道路和就可以使用a,b模块的方法
moduleA.aa();
moduleB.util();

// main也有自己的方法和变量
function m(){
    console.log('来自main.js');
}
m();

// 将css当做模块导入进来,像js那样导入
require('./style.css');