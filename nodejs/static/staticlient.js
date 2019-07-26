"use strict";

var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

var server = http.createServer(function(req, resp){
    var filepath;
    if(req.url == '/'){
        filepath = './message/index.html';
    }else{
        filepath = './message' + req.url;
    }
    serverStatic(resp, cache, filepath);
});

server.listen(2000, function(){
    console.log('listen on port 2000')
});

function serverStatic(resp, cache, filepath){
    if(cache[filepath]){
        sendFile(resp, filepath, cache[filepath]);
    }else{
        fs.exists(filepath, function(exists){
            if(exists){
                fs.readFile(filepath, function(err, data){
                    if(err){
                        send404(resp);
                    }else{
                        cache[filepath] = data;
                        sendFile(resp, filepath, data);
                    }
                });
            }else{
                send404(resp);
            }
        });
    }
}

function send404(resp){
    resp.writeHead(404, {'content-type': 'text/plain'});
    resp.write('404 Can not find the sourse !')
    resp.end();
}

function sendFile(resp, filepath, data){
    resp.writeHead(200, {'content-type': mime.lookup(path.basename(filepath))+"; charset = utf-8"});
    resp.end(data);
}