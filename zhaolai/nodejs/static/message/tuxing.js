'use strict'
function line(fill,size){
    var line = '';
    for(var i = 0; i < size; i++){
        line+=fill;
    }
    return line;
}
function zfx(fill,sizea,hollow){
    if(hollow){
        console.log(line(fill,sizea));
        for(var i =2; i<sizea; i++){
            console.log(fill+line(' ',sizea-2)+fill);
        }
        console.log(line(fill,sizea));
    }else{
        for(var i = 0; i<sizea; i++){
            console.log(line(fill,sizea));
        }
    }
}
function zjsjx(fill,sizea,hollow){
    if(hollow){
        console.log(fill);
        for(var i = 0;  i<sizea -2; i++){
            console.log(fill+line(' ',i)+fill);
        }
        console.log(line(fill,sizea));
    }else{
        for(var i = 1; i <= sizea; i++){
            console.log(line(fill,i));
        }
    }
}
function dysjx(fill,sizea,hollow){
    if(hollow){
        console.log(line(' ',sizea -1)+fill+line(' ',sizea -1));
        for(var i = 2;  i<sizea; i++){
            console.log(line(' ',sizea-i)+fill+line(' ',2*i-3)+fill+line(' ',sizea-i));
        }
        console.log(line(fill,2*sizea-1));
    }else{
        for(var i = 1; i <= sizea; i++){
            console.log(line(' ',sizea - i) + line(fill,2*i-1) + line(' ',sizea - i));
        }
    }
}
function lx(fill,sizea,hollow){
    if(hollow){
        console.log(line(' ',sizea -1)+fill+line(' ',sizea -1));
        for(var i = 2;  i<sizea+1; i++){
            console.log(line(' ',sizea-i)+fill+line(' ',2*i-3)+fill+line(' ',sizea-i));
        }
        for(var i = sizea-1;  i>1; i--){
            console.log(line(' ',sizea-i)+fill+line(' ',2*i-3)+fill+line(' ',sizea-i));
        }
        console.log(line(' ',sizea -1)+fill+line(' ',sizea -1));
    }else{
        for(var i = 1; i <= sizea; i++){
            console.log(line(' ',sizea - i) + line(fill,2*i-1) + line(' ',sizea - i));
        }
        for(var i = sizea-1;  i>0; i--){
            console.log(line(' ',sizea - i) + line(fill,2*i-1) + line(' ',sizea - i));
        }
    }
}
function huizi(fill,sizea,sizeb,hollow){
    if(hollow){
        console.log(line(fill,sizea));
        for(var i = 1; i<(sizea-sizeb)/2; i ++){
            console.log(fill+line(' ',sizea-2)+fill);
        }
        console.log(fill+line(' ',(sizea -sizeb)/2-1)+line(fill,sizeb)+line(' ',(sizea -sizeb)/2-1)+fill);
        for(var i =0; i<sizeb-2; i++){
            console.log(fill+line(' ',(sizea -sizeb)/2-1)+fill+line(' ',sizeb-2)+fill+line(' ',(sizea -sizeb)/2-1)+fill);
        }
        console.log(fill+line(' ',(sizea -sizeb)/2-1)+line(fill,sizeb)+line(' ',(sizea -sizeb)/2-1)+fill);
        for(var i = 1; i<(sizea-sizeb)/2; i ++){
            console.log(fill+line(' ',sizea-2)+fill);
        }
        console.log(line(fill,sizea));
    }else{
        for(var i = 0; i<=(sizea-sizeb)/2; i ++){
            console.log(line(fill,sizea));
        }
        for(var i =0; i<sizeb-2; i++){
            console.log(line(fill,(sizea -sizeb)/2+1)+line(' ',sizeb-2)+line(fill,(sizea -sizeb)/2+1));
        }
        for(var i = 0; i<=(sizea-sizeb)/2; i ++){
            console.log(line(fill,sizea));
        }
    }
}
function tx(fill,sizea,sizeb,hollow){
    if(hollow){
        console.log(line(' ',sizeb-1)+line(fill,sizea)+line(' ',sizeb-1));
        for(var i = 1; i < sizeb-1; i++){
            console.log(line(' ',sizeb-i-1)+fill+line(' ',sizea+2*i-2)+fill+line(' ',sizeb-i-1));
        }
        console.log(line(fill,sizea+2*sizeb-2));
    }else{
        for(var i = 1; i <= sizeb; i++){
            console.log(line(' ',sizeb-i)+line(fill,sizea+(i-1)*2)+line(' ',sizeb-i))
        }
    }
}
function draw(graph,fill,sizea,sizeb,hollow){
    if(graph == 1){
        zfx(fill,sizea,hollow);
    }
    if(graph == 2){
        zjsjx(fill,sizea,hollow);
    }
    if(graph == 3){
        dysjx(fill,sizea,hollow);
    }
    if(graph == 4){
        lx(fill,sizea,hollow);
    }
    if(graph == 5){
        huizi(fill,sizea,sizeb,hollow);
    }
    if(graph == 6){
        tx(fill,sizea,sizeb,hollow);
    }
}
// draw(1,'*',5,0,false);  //正方形  边长 第二个尺寸无用
// console.log("--------------------------------------------------------")
// draw(1,"*",5,0,true);
// console.log("--------------------------------------------------------")
// draw(2,'*',5,0,true);  //直角三角形  直角边长 第二个尺寸无用
// console.log("--------------------------------------------------------")
// draw(2,'*',5,0,false);
// console.log("--------------------------------------------------------")
// draw(3,'*',4,0,true);  //等腰三角形  高 第二个尺寸无用
// console.log("--------------------------------------------------------")
// draw(3,'*',5,0,false);
// console.log("--------------------------------------------------------")
// draw(4,'*',7,0,true);  //菱形  上三角高度 第二个尺寸无用
// console.log("--------------------------------------------------------")
// draw(4,'*',5,0,false);
// console.log("--------------------------------------------------------")
// draw(5,'*',7,3,true);  //回字 外面的边长 里面的边长
// console.log("--------------------------------------------------------")
// draw(5,'*',7,3,false);
// console.log("--------------------------------------------------------")
// draw(6,'*',2,3,true);  //等腰梯形 上底 高度
// console.log("--------------------------------------------------------")
// draw(6,'@',2,3,false);