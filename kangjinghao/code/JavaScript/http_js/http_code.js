'use strict';

// 导入http模块:
var http = require('http');

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置html类型和utf8编码格式 Content-Type: text/html;charset=utf8，:
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    // 将HTTP响应的HTML内容写入response:
    response.write('<input name="user"><br/>');
    response.write('<input name="password"><br/>');
    response.write('<input type="submit">');
    response.end('<h1>Hello world!</h1>');
    //end 和 write 都可以不写，但是response.end()必须要有
});

// 让服务器监听8080端口:
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');