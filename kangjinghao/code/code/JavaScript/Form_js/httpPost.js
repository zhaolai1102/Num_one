
var qs = require('querystring');
var url = require('url');
function doPost(req,res){
    var formDate = "";
    req.on('data',function(data){
        formDate += data;
    });
    req.on("end",function(){
        // res.writeHead(200,{'content-Type':'txt/html;charset=utf8'});
        var obj = qs.parse(formDate);
        console.log(obj);
        res.end('commit sucess!');
    });
}
exports.doPost = doPost;
