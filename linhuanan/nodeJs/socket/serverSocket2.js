var net = require('net');
var socketList = [];

var server = net.createServer((socket) => {
    
    socketList.push(socket);
    socket.on('data', (data) => {
        sendData(data);
    });
    socket.on('end', () => {
        socket.end();
    });
}).listen(1774, '192.168.196.71', () => {
    console.log('connect success:' + server.address());
});

function sendData(data) {
    for(var i in socketList) {
        socketList[i].write(data);
    }
}