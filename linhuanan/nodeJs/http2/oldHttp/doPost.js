
var queryString = require('querystring');

function doPost(req, res) {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8;'});
    var result = '';
    req.on('data', function (data) {
        result += data.toString();
    });
    req.on('end', function () {
        var query = queryString.parse(result);
        console.log(query);
        res.write(query.username);
        res.write(query.password);
        res.end();
    })

}

module.exports = {
    doPost:doPost
}