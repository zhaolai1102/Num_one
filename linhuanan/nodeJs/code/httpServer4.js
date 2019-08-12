var fs = require('fs'),
    path = require('path'),
    url = require('url'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.');

var httpServer = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);

    fs.stat(filepath, function(err, stats) {
        if(!err && stats.isFile()) {
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            response.writeHead(404);
            response.end('404 Not found');
        }
    });
});

httpServer.listen(8080);