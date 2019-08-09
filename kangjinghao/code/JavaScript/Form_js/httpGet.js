var http = require('http');
var qs = require('querystring');
var url = require('url');
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
exports.doGet = doGet;