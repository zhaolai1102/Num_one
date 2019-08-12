var fs = require('fs');
var rs = fs.createReadStream('write.txt', 'utf-8');
var ws = fs.createWriteStream('write2.txt', 'utf-8');

rs.pipe(ws);