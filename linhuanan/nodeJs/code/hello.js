var s = 'Hello';
var abc = [1,2,3,4,5];

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function sayHi() {
    console.log("你猜我say不sayhi");
}

module.exports = {
    greet : greet,
    sayHi : sayHi,
    abc : abc
};
