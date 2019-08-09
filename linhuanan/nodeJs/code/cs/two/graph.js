//实心正方形
function square(tc, w) {
    tc += ' ';
    var ta = '';
    for(var i = 0; i < w; i++) {
        for(var j = 0; j < w; j++) {
            ta += tc;     
        }
        ta += '\n';
    }
    return ta;
}

//空心正方形
function hollowSquare(tc, w) {
    tc += ' ';
    var ta = '';
    for(var i = 0; i < w; i++) {
        for(var j = 0; j < w; j++) {
            if(0 == i || w-1 == i) {
                ta += tc;
            } else if (0 == j || w-1 == j) {
                ta += tc;
            } else {
                ta += '  ';
            }        
        }
        ta += '\n';
    }
    return ta;
}

//实心三角形
function triangle(tc, h) {
    var str = '';
    for(var i = 0; i < h; i++) {
         for(var j = 0; j < h-i-1; j++ ) {
             str += " ";
         }
         for(var j = 0; j < 2*i+1; j++) {
             str += tc;
         }
         str += '\n';
    }
    return str;
}

//空心三角形
function hollowTriangle(tc, h) {
    var str = '';
    for(var i = 0; i < h; i++) {
         for(var j = 0; j < h-i-1; j++ ) {
             str += " ";
         }
         for(var j = 0; j < 2*i+1; j++) {
            if(i == h-1) {
                str += tc;
                continue;
            }

            if(0 == j || 2*i == j) {
                str += tc;
            } else {
                str += ' ';
            }
         }
         str += '\n';
    }
    return str;
}
//直角三角形
function rightTriangle(tc, h) {
    var str = '';
    for(var i = 0; i < h; i++) {
         for(var j = 0; j < h-i-1; j++ ) {
             str += " ";
         }
         for(var j = 0; j <= i; j++) {
             str += tc;
         }
         str += '\n';
    }
    return str;
}

//空心直角三角形
function hollowRightTriangle(tc,h) {
    var str = '';
    for(var i = 0; i < h; i++) {
         for(var j = 0; j < h-i-1; j++ ) {
             str += " ";
         }
         for(var j = 0; j <= i; j++) {
             if(0 == j || j == i || i == h-1) {
                str += tc;
             } else {
                 str += ' ';
             }
         }
         str += '\n';
    }
    return str;
}

//菱形
function diamond(tc,h) {
    var str = '';
    h /= 2;//10, 9
    h = Math.round(h);
    for(var i = 0; i < h; i++) {
        for(var j = 0; j < h-i-1; j++ ) {
            str += " ";
        }
        for(var j = 0; j < 2*i+1; j++) {
            str += tc;
        }
        str += '\n';
    }
    for(var i = 0; i < h - 1; i++) {
        for(var j = 0; j <= i; j++ ) {
            str += " ";
        }
        for(var j = 0; j < 2*(h-i-1)-1; j++) {
            str += tc;
        }
        str += '\n';
    }
    return str;
}

//空心菱形
function hollowDiamond(tc,h) {
    var str = '';
    h /= 2;//10, 9
    h = Math.round(h);
    for(var i = 0; i < h; i++) {
        for(var j = 0; j < h-i-1; j++ ) {
            str += " ";
        }
        for(var j = 0; j < 2*i+1; j++) {
            if(0 == j || 2*i == j) {
                str += tc;
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }
    for(var i = 0; i < h - 1; i++) {
        for(var j = 0; j <= i; j++ ) {
            str += " ";
        }
        for(var j = 0; j < 2*(h-i-1)-1; j++) {
            if(0 == j || 2*(h-i-1)-2 == j) {
                str += tc;
            } else {
                str += ' ';
            }
        }
        str += '\n';
    }
    return str;
}

//回字型
function returnShape(tc, w) {
    tc += ' ';
    var ta = '';
    var nwidth = Math.round(w/4);

    for(var y = 0; y < w; y++) {
        for(var x = 0; x < w; x++) {
            if(0 == y || w-1 == y) {
                ta += tc;
            } else if (0 == x || w-1 == x) {
                ta += tc;
            } else {
                //内层的正方形
                if(
                    ((y == nwidth || y == w-nwidth-1) && (x >= nwidth && x <= w-nwidth-1))
                    || 
                    ((x == nwidth || x ==w-nwidth-1) && (y >= nwidth && y <= w-nwidth-1))
                ) {
                    ta += tc;
                } else {
                    ta += '  ';
                }
            }        
        }
        ta += '\n';    
    }
    return ta;
}

function trapezoid(tc, h, w) {
    w = Number(w);
    var str = '';
    for(var i = 0; i < h; i++) {
         for(var j = 0; j < h-i-1; j++ ) {
             str += " ";
         }
         for(var j = 0; j < 2*i+w; j++) {
             str += tc;
         }
         str += '\n';
    }
    return str;
}

function hollowTrapezoid(tc, h, w) {
    w = Number(w);

    var str = '';
    for(var i = 0; i < h; i++) {
         for(var j = 0; j < h-i-1; j++ ) {
             str += " ";
         }
         for(var j = 0; j < 2*i+w; j++) {
            if(i == h-1 || i == 0) {
                str += tc;
                continue;
            }

            if(j == 0 || 2*i+w-1 == j) {
                str += tc;
            } else {
                str += ' ';
            }
         }
         str += '\n';
    }
    return str;
}

module.exports = {
    square:square,//正方形
    hollowSquare:hollowSquare,//空心正方形
    triangle:triangle,//三角形
    hollowTriangle:hollowTriangle,//空心三角形
    diamond:diamond,//菱形
    hollowDiamond:hollowDiamond,//空心菱形
    returnShape:returnShape,//回字型
    trapezoid:trapezoid,//梯形
    hollowTrapezoid:hollowTrapezoid,//空心梯形
    rightTriangle:rightTriangle,//直角三角形
    hollowRightTriangle:hollowRightTriangle,//空心直角三角形
}