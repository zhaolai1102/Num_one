"use strict";

function add(a, b){
    var c = a+b;
    console.log(c);
}
function reduce(a,b){
    var c = a - b;
    console.log(c)
}
module.exports = {
    add:add,
    reduce:reduce
};