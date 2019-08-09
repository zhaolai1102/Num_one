var fs = require('fs');
var rs = fs.createReadStream('write.txt', 'utf-8');

rs.on('open', function (fd) {
    console.log("正在打开文件");
    console.log(fd);
    console.log("=-=-=-=-=-=-=-=-=-=-=");
})

rs.on('ready', function () {
    console.log('准备打开文件');
});
var data = '';
rs.on('data', function (chunk) {
    console.log("正在读取文件");
    // console.log(chunk);
    data += chunk;
});

rs.on('end', function () {
    console.log('文件读取完成');
});

rs.on('error', function (err) {
    console.log(err);
    console.log('读取文件失败');
});

rs.on('close', function () {
    console.log("文件已经关闭鸟");
});
console.log(data);