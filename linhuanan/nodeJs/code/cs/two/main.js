var graph = require('./graph');
var myFunction = require('./myFunction');

//图形
var taList = ['zfx', 'sjx', 'zjsjx', 'lx', 'hzx', 'tx'];
var ta;
var tc;
var w;
var h;
var kx;

var data = '';
//判断结束,处理逻辑
process.on('exit', function(code) { 
    var zs = '没东西打印';
    switch(ta) {
        case 'zfx':
        if(kx) {
            zs = graph.hollowSquare(tc,w);
        } else {
            zs = graph.square(tc,w);
        }
        break;
        case 'sjx':
        if(kx) {
            zs = graph.hollowTriangle(tc,h);
        } else {
            zs = graph.triangle(tc,h);
        }
        break;
        case 'zjsjx':
        if(kx) {
            zs = graph.hollowRightTriangle(tc,h);
        } else {
            zs = graph.rightTriangle(tc,h);
        }
        break;
        case 'lx':
        if(kx) {
            zs = graph.hollowDiamond(tc,h);
        } else {
            zs = graph.diamond(tc,h);
        }
        break;
        case 'hzx':
            zs = graph.returnShape(tc,w);
        break;
        case 'tx':
            if(kx) {
                zs = graph.hollowTrapezoid(tc,h,w);
            } else {
                zs = graph.trapezoid(tc,h,w);
            }
        break;
    }
    console.log(zs);
});

process.stdin.setEncoding('utf8');
process.stdout.write("请输入参数 格式: \n图形首字母, 填充内容, 高:宽, 是否空心 1空心 2实心\n");
process.stdin.on('data',(input)=>{
    var check = true;
    data = input;
    var arr = myFunction.stringToArray(data, ',');
    // if(arr.length < 5) {
    //     check = false;
    //     console.log('对不起，输入的内容个数有误\n');
    // }
    //获取图案值
    for(var i in taList) {
        if(arr[0] == taList[i]) {
            ta = arr[0];
        }
    }
    if(myFunction.stringLength(ta) == 0) {
        check = false;
        console.log('对不起，输入的图案不存在\n');
    }

    tc = arr[1];
    //获取宽高上底下底
    var detail = myFunction.stringToArray(arr[2], ':');
    detail = detail.filter(function(value, index) {
        if(isNaN(Number(value))|| Number(value) < 1) { 
            return false;
        }
        return true;
    });
    switch(ta) {
        case 'zfx':
            if(detail.length < 1) {
                console.log('对不起，输入的宽高参数有误');
                return;
            } 
            w = detail[0];
        break;
        case 'sjx':
        case 'zjsjx':
        case 'lx':
            if(detail.length < 1) {
                console.log('对不起，输入的高参数有误');
                return;
            } 
            h = detail[0];
        break;
        case 'hzx':
            if(detail.length < 1) {
                console.log('对不起，输入的宽高参数有误');
                return;
            } 
            w = detail[0];
        break;
        case 'tx':
            if(detail.length < 2) {
                console.log('对不起，输入的底参数有误');
                return;
            } 
            h = detail[0];
            w = detail[1];
        break;
    }

    if(!isNaN(Number(arr[3]))) {
        if(Number(arr[3]) != 1) {
            kx = false;
        } else {
            kx = true;
        }
    }

    if(check) {
        process.exit(0);
    }
});