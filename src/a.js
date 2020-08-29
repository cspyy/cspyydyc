// js的做法改造为Nodejs的模块
// 步骤：
// 1、将立即执行函数表达式删掉
// 2、将return改为module.exports
// var moduleA=(function(){
    // 写了私有变量和函数，可以将想要暴露出去的方法通过return暴露出去
    var a=10;
    var b=5;
    function aa(){
        console.log("来自a.js");
    }
    // 接口
    // 将想要对外提供的方法和属性通过该接口暴露出去
    // 将模块导出去，就可以在别的JS文件中使用require接收了
    module.exports= {
        a,
        aa
    };
// })();
