var fs = require('fs'),
    path = require('path'),
    url = require('url'),
    http = require('http');

var root = path.resolve(process.argv[2] || ".");

var httpServer = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var filename = path.join(root, pathname);

    fs.stat(filename, function(err, stats) {
        if(!err && stats.isFile()) {
            response.writeHead(200);
            fs.createReadStream(filename).pipe(response);
        } else {
            response.writeHead(404);
            response.end("404 not find");
        }
    });
});

httpServer.listen(8080);
