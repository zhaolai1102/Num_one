"use strict";
var net = require('net');
var hostname = process.argv[2];  //可以多人连接 通过命令参数
var port = process.argv[3];
var client = net.connect({host:hostname,port:port},function(){
    console.log('connect to server');
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', function(){
        var data = process.stdin.read();
        if(data !== null){
            client.write("message: "+data);
        }
    });
});
client.on('data',function(data){
    console.log(data.toString());
})
client.on('end',function(){
    console.log('bye-bye');
});