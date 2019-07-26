"use strict"

var module = {
    name : html,
    exports:{}
};

var a = function(module){
    // 这是文本开始
    function good(){
        console.log("good");
    }
    module.exports = good;
    // 这是文本结束
    return module.exports;
};

var b = a(module);

save(module,b);
