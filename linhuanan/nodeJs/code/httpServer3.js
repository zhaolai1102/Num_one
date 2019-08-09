var fs = require('fs'),
    path = require('path'),
    url = require('url'),
    http = require('http');

//获取相对路径的绝对路径
var root = path.resolve(process.argv[2] || '.');

console.log(root);

//获取用户提交的路由，获取路径信息判断是否存在文件，如果存在则将文件传给客户端
var httpServer = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);
    fs.stat(filepath, function(err, stats) {
        //如果没报错，并且是一个文件
        if(!err && stats.isFile()) {
            //返回头部信息给浏览器
            response.writeHead(200);

            fs.createReadStream(filepath).pipe(response);
        } else {
            //返回头部信息给浏览器
            response.writeHead(404);
            response.end('404 not found');
        }
    });
});

httpServer.listen(8080);