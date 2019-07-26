"use strict"

process.nextTick(function(){
    console.log("下一步");
} );

console.log(1);
console.log(2);
console.log(3);

process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}