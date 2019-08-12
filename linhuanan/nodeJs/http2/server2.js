var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var urls = require('./urls');

var root = path.resolve('.');

var httpServer = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    //获取路径
    if (pathname.lastIndexOf('.') >= 0) {
        pathname = pathname.substring(0, pathname.lastIndexOf('.'));
    }
    switch (req.method) {
        case 'GET':
            if (urls.get_urls[pathname] == undefined) {
                res.writeHead(404);
                res.end("404 Not Found");
                return;
            }
            var arr = urls.get_urls[pathname].split('@');
            var file = arr[0] + ".js";
            var filename = path.join(root, file);
            fs.stat(filename, function (error, stats) {
                if (!error && stats.isFile()) {
                    var requires = require(filename);
                    var method = arr[1];
                    requires[method](req, res);
                } else {
                    res.writeHead(404);
                    res.end("404 Not Found");
                    return;
                }
            });
            break;
        case 'POST':
            if (urls.post_urls[pathname] == undefined) {
                res.writeHead(404);
                res.end("404 Not Found");
                return;
            }
            var arr = urls.post_urls[pathname].split('@');
            var file = arr[0] + ".js";
            var filename = path.join(root, file);
            fs.stat(filename, function (error, stats) {
                if (!error && stats.isFile()) {
                    var requires = require(filename);
                    var method = arr[1];
                    requires[method](req, res);
                } else {
                    res.writeHead(404);
                    res.end({ 'code': 404, 'message': '404 Not Found' });
                }
            });
            break;
    }
});

httpServer.listen(8080);