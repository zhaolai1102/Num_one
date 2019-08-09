var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
var hours = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
console.dir(year + "-" + month + "-" + day + " " + hours + ":" + minute + ":" + second);

