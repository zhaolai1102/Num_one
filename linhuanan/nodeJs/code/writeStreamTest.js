var fs = require('fs');
var ws1 = fs.createWriteStream('output.txt', 'utf-8');
ws1.write('使用Stream写入文本数据。。\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt', 'utf-8');
ws2.write(Buffer.from('你猜猜我猜不猜呢 \n', 'utf-8'));
ws2.write(Buffer.from('END.', 'utf-8'));
ws2.end();