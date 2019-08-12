var fs = require('fs');
fs.readFile('/Users/elin/Desktop/xdh_document/nodeJs/code/main.js', 'utf-8', function (err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile('/Users/elin/Desktop/xdh_document/javaScript/kz/images/1.jpg', 'utf-8', function (err, data) {
    if(err) {
        console.log(err);
    } else {
        var test = "AA";
        var bf = Buffer.from(test, 'utf-8');
        console.log(bf);
    }
});

try {
    var data = fs.readFileSync('/Users/elin/Desktop/xdh_document/nodeJs/code/main.js', 'utf-8');
    console.log(data);
} catch(err) {
    console.log(666);
    console.log(err);
}

console.log('完成了？？');


