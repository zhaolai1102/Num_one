"use strict"
var qs = require('querystring');
function dopost(req, resp){
    var totaldata = '';
    req.on('data',function(data){
        totaldata += data;
    });
    req.on('end',function(){
        var data = qs.parse(totaldata);
        console.log(typeof data);
        resp.end(); 
    })
}

module.exports = dopost;