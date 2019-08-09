var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var thisPath = path.resolve(process.argv[2] || '.');

var httpServer = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var filename = path.join(thisPath, pathname);
    fs.stat(filename, function(err, stats) {
        if(!err && stats.isFile()) {
            response.writeHead(200);
            fs.createReadStream(filename, 'utf-8').pipe(response);
        } else {
            response.writeHead(404);
            response.end('404 Not Found!!');
        }
    });
});

httpServer.listen(8080);