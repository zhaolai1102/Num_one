"use strict";
var net = require("net");
var clientList = [];
var server = net.createServer(function(socket){
    clientList.push(socket);
    socket.on('data',function(data){
        console.log(data.toString());
        boardcast(data);
    });
    socket.on('end',function(){
        clientList.splice(clientList.indexOf(socket),1);
    })
});
function boardcast(data){
    for(var i = 0; i < clientList.length; i ++){
        clientList[i].write(data);
    }
}
server.listen(1337,"127.0.0.1");
console.log('127.0.0.1:1337');
