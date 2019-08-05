"use strict";
var http = require("http");
var doget = require('./doget');
var dopost = require('./dopost');
http.createServer(function(req, resp){
    if(req.method == "GET"){
        doget(req,resp);
    }else if(req.method == "POST"){
        dopost(req,resp)
    }else{
        resp.end();
    }
}).listen(2000,'127.0.0.1');