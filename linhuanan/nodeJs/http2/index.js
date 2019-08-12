var tools = require('./tools');

function indexView(req, res) {
    res.writeHead(200);
    tools.viewFormFunction('index', res, callbackController);
}

function normalizeCss(req, res) {
    res.writeHead(200, { 'Content-Type':'text/css; charset=utf-8' });

    tools.cssFormFunction('normalize.css', res, callbackController);
}

function mkCss(req, res) {
    res.writeHead(200, { 'Content-Type':'text/css; charset=utf-8' });

    tools.cssFormFunction('mk.css', res, callbackController);
}

function backgroundImg(req, res) {
    res.writeHead(200, { 'Content-Type':'image/jpeg' });
    tools.imageFormFunction('bj.jpg', res, callbackController);
}

function callbackController(rs, res) {
    rs.on('data', function (chunk) {
        res.write(chunk);
    });

    rs.on('end', function () {
        res.end();
    });
}

module.exports = {
    indexView: indexView,
    normalizeCss:normalizeCss,
    mkCss:mkCss,
    backgroundImg:backgroundImg,
}