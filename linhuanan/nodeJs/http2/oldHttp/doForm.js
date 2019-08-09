function doForm(req, res) {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form method="POST">'); 
    res.write('账号:<input name="username" type="text">密码:<input name="password" type="password"><input type="submit" value="提交">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}

module.exports = {
    doForm:doForm
};