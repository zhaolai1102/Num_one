"ust strict";
var url = require('url');
var qs = require('querystring');
function doget(req, resp){
    var res = qs.parse(url.parse(req.url).query);
    console.log(res);
    resp.writeHead(200,{'content-Type':'text/html'})
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>');
    resp.write('this is a server');
    resp.write('</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<form method = "post"> ');
    resp.write('user-name:<input name="username">');
    resp.write('password:<input name = "password" type = "password">');
    resp.write('<input type ="submit">');
    resp.write('</form>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
}
module.exports = doget;