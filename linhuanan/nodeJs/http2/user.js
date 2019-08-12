var queryString = require('querystring');
var tools = require('./tools');
var fs = require('fs');
var fileSystem = require('./fileSystem');
var jsonHeader = { 'Content-Type': 'application/json' };
var crypto = require('crypto');

//处理注册数据
function register(req, res) {
    var result = "";
    req.on('data', function (data) {
        result += data.toString();
    });

    req.on('end', function () {
        var json = '';
        var query = queryString.parse(result);
        res.writeHead(200, jsonHeader);
        if (query.password != query.check_password) {
            json = tools.errorReturn(30001, "两次输入密码不正确");
            //TODO 暂时判断用户两次密码不正确
        } else {
            //判断是否存在这个数据
            var insertData = { 'username': query['username'], 'password': md5(query['password']), 'create_time': (new Date()).getTime() }
            var isExists = fileSystem.find('user', insertData, function (filename, data) {
                try {
                    var rfs = fs.readFileSync(filename, 'utf-8');
                    var db = JSON.parse(rfs);
                    var findArr = [];
                    for (var i in db) {
                        if (db[i]['username'] == data['username']) {
                            return true;
                        }
                    }
                    return false;
                } catch (error) {
                    return false;
                }
            })
            if (!isExists) {
                var add = fileSystem.add('user', insertData);
                if (add) {
                    json = tools.successReturn("创建成功");
                } else {
                    json = tools.errorReturn(30002, "创建失败，请联系管理员");
                }
            } else {
                json = tools.errorReturn(30002, "创建失败，用户名已存在");
            }

        }
        res.write(json);
        res.end();
    });
}

function md5(data) {
    var hash = crypto.createHash('md5');
    hash.update(data);
    return hash.digest('hex');
}

function login(req, res) {
    var result = "";
    var json = '';
    req.on('data', function (data) {
        result += data.toString();
    });

    req.on('end', function () {
        var query = queryString.parse(result);
        res.writeHead(200, jsonHeader);
        var data = { 'username': query['username'], 'password': md5(query['password']) };
        var findExists = fileSystem.find('user', data, function (filename, data) {
            try {
                var rfs = fs.readFileSync(filename, 'utf-8');
                var db = JSON.parse(rfs);
                var findArr = [];
                for (var i in db) {
                    if (db[i]['username'] == data['username'] && db[i]['password'] == data['password']) {
                        return true;
                    }
                }
                return false;
            } catch (error) {
                return false;
            }
        });

        if (findExists) {
            json = tools.successReturn();
        } else {
            json = tools.errorReturn(30003, '账号或密码错误');
        }
        res.write(json);
        res.end();
    });
}

function list(req, res) {
    var json = '';
    var arr = [];
    res.writeHead(200, jsonHeader);
    var data = fileSystem.getAll('user');
    if(!data) {
        json = tools.successReturn();
    } else {
        for(var i in data) {
            arr.push(data[i]);
        }
        json = tools.successReturn('成功', arr);
    }
    res.write(json);
    res.end();
}

//注册主页
function registerView(req, res) {
    res.writeHead(200);
    tools.viewFormFunction('user/register', res, function (rs, res) {
        rs.on('data', function (chunk) {
            res.write(chunk);
        });

        rs.on('end', function () {
            res.end();
        });
    });
}

//登录页面
function loginView(req, res) {
    res.writeHead(200);
    tools.viewFormFunction('user/login', res, callbackController);
}

//列表页面
function listView(req, res) {
    res.writeHead(200);
    tools.viewFormFunction('user/userList', res, callbackController);
}


module.exports = {
    registerView: registerView,
    loginView: loginView,
    listView: listView,
    register: register,
    login: login,
    list: list,
}