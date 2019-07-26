function checkLength(thing){
    var length = 0;
    while(true){
        if(thing[length]){
            length +=1;
        }else{
            return length;
        }
    }
}
function cut(string,cutthing){
    var str1='';
    var count = 0;
    var res = Array();
    var cutlen = checkLength(cutthing);
    var strlen = checkLength(string);
    for(var i = 0; i < strlen - cutlen + 1; i ++){
        var stringc = ''
        for(var l = 0; l < cutlen; l ++){
            stringc += string[i+l];
        }
        if(stringc != cutthing){
            str1 +=string[i];
        }else{
            res[count] = str1;
            str1 = '';
            count ++;
            i += cutlen-1;
        }
    }
    for(var i = 1; i < cutlen; i ++){
        str1 += string[i - cutlen + strlen]
    }
    res[count] = str1;
    return res;
}
function join(str,arr){
    var res = '';
    for(var i = 0; i < checkLength(arr); i++){
        res += arr[i];
        if(i != checkLength(arr) - 1){
            res += str;
        }
    }
    return res;
}
function check(string,str){
    var strl = checkLength(str);
    for(var i = 0; i <= checkLength(string) - strl; i ++){
        var strn = '';
        for(var l = 0; l < strl; l++){    // strl 写成3了..因为编辑的时候用的3个字符
            strn += string[i+l];
        }
        if(strn == str){
            return i;
        }
    }
    return -1;
}
function getstr(string, startnum, endnum){
    var res = '';
    var length = checkLength(string)
    if(endnum > length) endnum = length;
    if(startnum > length) return -1;
    if(startnum < 0) startnum += length;
    if(startnum < 0) return -1;
    if(endnum < 0) endnum += length;
    if(endnum < 0) return -1;
    if(startnum > endnum) return -1;
    for(var i = startnum; i <= endnum; i++){
        res += string[i];
    }
    return res;
}
// console.log(checkLength("hello"))     //检查长度
// console.log(cut("abcadcjks","cd"));        //切割     字符串  切割符  (多个字符)
// console.log(join('@',Array('dd')))     //拼接    拼接字符串  数组
// console.log(check("abade","a"));   //查找字符串  字符串  要查找的字符串  
// console.log(getstr('abcde',-1,4));          //截取字符串  字符串   起始索引  结束索引