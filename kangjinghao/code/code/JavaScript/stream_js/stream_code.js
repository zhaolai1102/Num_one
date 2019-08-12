'use strict';

var fs = require('fs');

// fs.createReadStream读取 打开一个流:打开格式要设置！
var rs = fs.createReadStream('example.txt', 'utf-8');
//data事件表示流的数据已经可以读取了
rs.on('data', function (data) {
    console.log('DATA:');
    console.log(data);
});
// end事件表示这个流已经到末尾了，没有数据可以读取了
rs.on('end', function () {
    console.log('END');
});
//error事件表示出错了。
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

// fs.createWriteStream 写入流
var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

// var ws2 = fs.createWriteStream('output1.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

// pipe：管道，可以将写入流与读取流连接
var rs = fs.createReadStream('example.txt');//读取
var ws = fs.createWriteStream('copied.txt');//写入
rs.pipe(ws);//将读取的内容写入copied.txt
// rs.pipe(ws,{end:false}); end事件触发后不关闭
/*默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。如果我们不希望自动关闭Writable流，需要传入参数：
readable.pipe(writable, { end: false });
 */