var http = require('http');
var doForm = require('./doForm');
// var doGet = require('./doGet');
var doPost = require('./doPost');


http.createServer(function(req, res) {
    if(req.method == "GET") {
        doForm.doForm(req,res);
    } else if(req.method == "POST") {
        doPost.doPost(req, res);
    } else {
        req.end();
    }
    
}).listen(8080);
