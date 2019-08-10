var fs = require('fs');
var data = "爱我中华～1";
fs.writeFile('write.txt', data, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("ok了");
    }
});

try {
    var check = fs.writeFileSync('write.txt', data);
    console.log(check);
} catch(err) {
    console.log('出错了..');
}