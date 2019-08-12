var url = require('url');
var queryString = require('querystring');

function doGet(req, res) {
    var query = queryString.parse(url.parse(req.url).query);
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8;'});
    res.write(query.username);
    res.write(query.password);
    res.end();
}

module.exports = {
    doGet:doGet,
}