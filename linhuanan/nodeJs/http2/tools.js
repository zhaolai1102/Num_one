var fs = require('fs');
var path = require('path');
//使用水管传输到页面
function view(target, targetToStream) {
    target += '.html';
    var root = path.resolve('./html');
    var filename = path.join(root, target);
    fs.createReadStream(filename).pipe(targetToStream);
}

//自定义逻辑传输到页面
function viewFormFunction(target, targetToStream, callback) {
    target += '.html';
    var root = path.resolve('./html');
    var filename = path.join(root, target);
    var rs = fs.createReadStream(filename, 'utf-8');
    callback(rs, targetToStream);
}

//自定义逻辑传输到页面
function cssFormFunction(target, targetToStream, callback) {
    var root = path.resolve('./css');
    var filename = path.join(root, target);
    var rs = fs.createReadStream(filename, 'utf-8');
    callback(rs, targetToStream);
}

//封装错误返回对象
function errorReturn(code, msg, data = []) {
    var status = { code: code, msg: msg, data: data };
    var json = JSON.stringify(status);
    return json;
}
//封装成功返回对象
function successReturn(msg = '', data = []) {
    var status = { code: 200, msg: msg, data: data };
    var json = JSON.stringify(status);
    return json
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
    view: view,
    viewFormFunction: viewFormFunction,
    cssFormFunction:cssFormFunction,
    errorReturn: errorReturn,
    successReturn: successReturn
}