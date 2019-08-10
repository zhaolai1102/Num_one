var fs = require('fs');
var path = require('path');
var root = path.resolve('./database');
var charset = "utf-8";

/*
存储结构定义  { {} : {}, {} : {} } 
左边为系统自动生成属性，右边为用户自定义属性
判断数据在左侧(创建时间，修改时间等)，校验数据在右侧
*/

function add(dbname, data, callback = null) {
    dbname += '.db';
    var filename = path.join(root, dbname);
    if (!checkFileIsExists(filename)) {
        //创建文件
        fs.writeFileSync(filename, JSON.stringify({}));
    }
    //如果存在回调
    if (callback != null) {
        return callback(filename, data);
    }
    //走原来定义的逻辑
    try {
        //获取文件的内容判断数据是否重复
        var rfs = fs.readFileSync(filename, charset);
        var db = JSON.parse(rfs);

        var insertData = {};
        //记录添加时间(默认值)
        var time = (new Date()).getTime();
        var defaultValue = { 'created_time': time, 'updated_time': time };

        //添加数据逻辑
        for (var i in data) {
            insertData[i] = data[i];
        }

        defaultValue = JSON.stringify(defaultValue);
        db[defaultValue] = insertData;
        var dbObj = db;
        db = JSON.stringify(db);
        fs.writeFileSync(filename, db);
        return dbObj;
    } catch (err) {
        console.log(err);
        return false;
    }
}

//更新数据
function update(dbname, old_data, new_data, callback = null) {
    dbname += '.db';
    var filename = path.join(root, dbname);
    if (!checkFileIsExists(filename)) {
        return false;
    }

    if (callback != null) {
        return callback(filename, old_data, new_data);
    }

    try {
        var rsf = fs.readFileSync(filename, 'utf-8');
        var db = JSON.parse(rsf);
        //TODO 稍后处理
    } catch (error) {
        console.log(error);
        return false;
    }
}

function remove() {

}

function find(dbname, data, callback = null) {
    dbname += '.db';
    var filename = path.join(root, dbname);
    if (!checkFileIsExists(filename)) {
        return false;
    }

    if(callback != null) {
        return callback(filename, data);
    }

    try {
        var rfs = fs.readFileSync(filename, 'utf-8');
        var db = JSON.parse(rfs);
        var findArr = [];
        for(var i in db) {
            var find = true;
            for(var j in db[i]) {
                if(db[i][j] != data[j]) {
                    find = false;
                }
            }
            if(find) {
                return db[i];
            }
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

function getAll(dbname, callback = null) {
    dbname += '.db';
    var filename = path.join(root, dbname);
    if (!checkFileIsExists(filename)) {
        return false;
    }

    if(callback != null) {
        return callback(filename);
    }

    try {
        var rfs = fs.readFileSync(filename, 'utf-8');
        var db = JSON.parse(rfs);
        return db;
    } catch (error) {
        console.log(error);
        return false;
    }
}

//通过布尔值判断文件是否存在
function checkFileIsExists(filename) {
    return fs.existsSync(filename);
}

module.exports = {
    add: add,
    update: update,
    remove: remove,
    find: find,
    getAll: getAll
}