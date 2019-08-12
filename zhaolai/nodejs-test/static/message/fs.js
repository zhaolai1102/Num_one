"use strict"
var fs = require('fs')
fs.readFile('./try/abc.txt','utf8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
// fs.writeFile('abc.txt','you are a good man',function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('nice');
//     }
// });
// fs.stat('a.txt',function(err,stat){
//     if(err){
//         console(err);
//     }else{
//         console.log(stat.isFile());
//         console.log(stat.isDirectory());
//         if(stat.isFile){
//             console.log(stat.size);
//             console.log(stat.birthtime);
//             console.log(stat.mtime);
//         }
//     }
// });
// var invalue = fs.createWriteStream('d.txt','utf8');
// var outvalue = fs.createReadStream('abc.txt','utf8');
// invalue.write("天真");
// invalue.end();
// outvalue.on('data',function(chunk){
//     console.log(chunk);
// });
// outvalue.pipe(invalue);