"use strict";

var url = require('url');
var path = require('path');
var fs = require('fs');
var http = require('http');
var txt = "html.txt"

var opath = path.resolve('.');
console.log(opath);

var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(opath, pathname);
    var txt = 'html.txt';
    if(path.basename(filepath) != txt){
        filepath = path.join(filepath,txt);
    }
    console.log(filepath);
    fs.stat(filepath,function(err,stats){
        if(!err && stats.isFile()){
            console.log('good');
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response)
        }else{
            console.log('bad~');
            response.writeHead(404);
            response.end('404 not found')
        }
    });
});

server.listen(8080);