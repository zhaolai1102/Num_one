
function stringToArray(data, gjz) {
    var str = '';
    var arr = [];
    if(stringLength(data) == 0) return arr;
    data = data.trim();
    for(var i = 0; i < data.length; i++) {
        if(data[i] == gjz) {
            if(str.length > 0) {
                arr.push(str);
                str = '';
            }
            continue;
        }
        str += data[i];
        if(i == data.length-1) {
            arr.push(str);
            break;
        }
    }
    return arr;
}

function stringLength(data) {
    data += '';
    var i = 0;
    var len = 0;
    for(;;) {
        if(data[i] == undefined) {  
            break;
        }
        len++;
        i++;
    }
    return len;
}

function arrayToString(arr, target) {
    var str = '';
    for(var i = 0; i < arr.length; i++) {
        str += arr[i];
        if(i != arr.length-1) {
           str += target;
        }
    }
    return str;
}

function stringIndexOf(data, target) {
    var len = stringLength(data);
    var targetLen = stringLength(target);
    for(var i = 0; i <= len-targetLen; i++) {
        var checkStr = '';
        for(var j = 0; j < targetLen; j++) {
            checkStr += data[i+j];
        }
        if(checkStr == target) {
            return i;
        }
    }
    return -1;
}

function stringSubstring(data, startIndex, count = null) {
    var length = stringLength(data);
    if(count == null) count = length - startIndex;
    var str = '';
    for(var i = 0; i < length; i++) {
        if(i >= startIndex && count > 0) {
            str += data[i];
            count--;
        }
    }
    return str;
}

module.exports = {
    stringToArray:stringToArray,
    stringLength:stringLength,
    arrayToString:arrayToString,
    stringIndexOf:stringIndexOf,
    stringSubstring:stringSubstring,
}