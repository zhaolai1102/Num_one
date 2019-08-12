var fs = require('fs');

fs.stat('write.txt', function (err, stat) {
    if(err) {
        console.log(err);
        console.log('报错了');
    } else {
        console.log(stat.isFile());
        console.log(stat.isDirectory());
        if(stat.isFile()) {
            console.log('size: ' + stat.size);
            console.log('birthTime: ' + stat.birthtime );
            console.log('modified time: ' + stat.mtime);
        }
    }
});

try {
    var stat = fs.statSync('write.txt');
    console.log(stat.isFile());
    console.log(stat.isDirectory());
    if(stat.isFile()) {
        console.log('size: ' + stat.size);
        console.log('birthTime: ' + stat.birthtime);
        console.log('modified time: ' + stat.mtime);
    }
} catch(err) {

}