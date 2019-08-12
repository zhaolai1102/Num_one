var net = require('net');
var socketList = [];
var server = net.createServer((socket) => {
    // console.log(socketList[socket.address().address]);
    console.log(socketList);
    console.log(socketList.length);
    // if(!checkSocket(socket)) {
    //     socket.write('不能重复登录');
    //     socket.end();
    // } else {
        socketList[socket.address().address] = socket;
        socket.on('data', function(data) {
            sendData(socket, data);
        });
        socket.on('end', function() {
            if(socketList[socket.address().address] != "") {
                
                delete socketList[socket.address().address];
            }
            socket.end();
        });
    // }

});

server.listen(1773, "127.0.0.1", ()=> {
    console.log('opened server on', server.address());
});
//对发送者外的人发送数据
function sendData(socket, data) {
    for(var i in socketList) {
        if(i != socket.address().address) {
            socketList[i].socket.write(data);
        }
    }
}
//检查是否存在相同地址的socket
function checkSocket(socket) {
    if(socketList[socket.address] == socket) {
        return false;
    }
    return true;
}