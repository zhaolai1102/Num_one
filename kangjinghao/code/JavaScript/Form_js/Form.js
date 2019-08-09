'use strict';
var http = require('http');
var qs = require('querystring');
var url = require('url');
var Get = require('./httpGet');
var Post = require('./httpPost');
// 导入http模块:

// 创建http server，并传入回调函数:
http.createServer(function (req, res) {
    // console.log(req);
    // res.end();
    if(req.method == "GET"){
        Get.doGet(req,res);
    }else if(req.method == "POST"){
        Post.doPost(req,res);
    }else{
        res.end();
    }
}).listen(8080);
/*
function doGet(req,res){
    var obj = qs.parse(url.parse(req.url).query);
    // obj.name //用户名
    // obj.password  //密码
    // console.log(obj);
    //响应200, html类型和utf8编码格式 :
    //Head 给浏览器看
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    // res.write 回复给浏览器,只发送不断开
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('</title>');
    res.write('<body>');
    //添加post请求方式,默认为get
    res.write('<form method="post">');
    res.write('username:<input name="username"><br/>');
    res.write('password:<input name="password" type="password"><br/>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    //end 发送并断开,在html显示的
    res.end('<h1>Form表单数据分析!</h1>');
    //end 和 write 都可以不写，但是response.end()必须要有

}
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
*/
console.log('Server is running at http://127.0.0.1:8080/');
