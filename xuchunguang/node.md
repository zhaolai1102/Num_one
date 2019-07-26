# 深入了解模块原理
当我们编写JavaScript代码时，我们可以申请全局变量：
var s = 'global';
在浏览器中，大量使用全局变量可不好。如果你在a.js中使用了全局变量s，那么
在b.js中也使用了全局变量s，将造成冲突，b.js中对s复制会改变a.js的运行逻辑。
也就是说，JavaScript语言本身并没有一种模块机制来保证不同模块可以使用
相同的变量名。
那Node.js是如何实现这一点的?
其实要实现“模块”这个功能，并不需要语法层面的支持。Node.js也并不会增加
任何JavaScript语法。实现“模块功能的奥妙就在于JavaScript是一种函数式编程
语言，它支持闭包。如果我们把一段JavaScript代码用一个函数包装起来，这段代
码的所有“全局”变量就变成了函数内部的局部变量。
请注意我们编写的hello.js代码是这样的：
var s = 'hello';
var name = 'world';
console.log(s+','+name+'!');
Node.js加载了hello.js后，它可以把代码包装一下，变成这样执行：
(function(){
  //读取的hello.js代码
  var s = 'hello';
  var name = 'world';
  console.log(s+','+name+'!');
})();
这样以来，原来全局的变量s现在变成了匿名函数内部的局部变量。如果Node.js继续
加载其他模块，这些模块中定义的“全局”变量s也互补干扰。
所以，Node利用JavaScript的函数式变成的特性，轻而易举地实现了模块的隔离。
但是，模块的输出module.exports怎么实现？
这个也很容易实现，Node可以先准备一个对象module：
//准备module对象
var module = {
  id:'hello',
  exports:{}
};
var load = function (module){
  function greet(name){
    console.log('hello,'+name+'!');
  }
  module.exports = greet;
  // hello.js代码结束
  return module.exports;
};
var exported = load(module);
//保存module
save(module,exported)
可见，变量module是Node在加载js文件前准备的一个变量，并将其传入加载函数，
我们在hello.js中可以直接使用变量module原因就在于它实际上是函数的一个参数：
module.exports = greet;
通过把参数module传递给load()函数,hello.js就顺利把一个变量传递给Node执行环
境，Node会把module变量保存到某个地方。
由于Node保存了所有导入modul，当我们用require()获取module时，Node找到了
对应的module，把这个module的exports变量返回，这样，另一个模块就能顺利拿
到了模块的输出：
var greet = require('./hello');
以上是Node实现JavaScript模块的一个简单的原理介绍。

# 使用严格模式
如果JavaScript文件开头写上"use strict";，那么Node在执行该JavaScript时将使用严格模式。但是，在服务器环境下，如果有很多JavaScript文件，每个文件都要写上"use strict";很麻烦。我们可以个Nodejs传递一个参数，让Node直接为所有js文件开启严格模式：
`nod --use_strict calc.js`
# exports
在a.js文件中，exports函数
`module.exports = {
    san:san,
    zheng:zheng,
    ling:ling,
    ti:ti,
    hui:hui
};`
在b.js文件中`require("./a")`得到的是一个字典。使用a.js中的函数，需要通过exports穿过来的字典中的键，取字典中的值。即函数对象，来使用函数。

# fs
## 读文件
1、异步读取文件
`'use strict';
var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});`
注意：sample.txt文件必须在当前目录下，文件编码为utf-8  
2、错误情况输出
由于err是否为null就是判断是否出错的标志，所以通常的判断逻辑是  
`if (err) {
    // 出错了
} else {
    // 正常
}`
3、读取图片
`'use strict';
var fs = require('fs');
fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});`
4、Buffer
当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象
在Nodejs中，Buffer对象就是一个包含零个或任意个字节的数组（和Array不同）
Buffer对象可以和String做转换
`// Buffer -> String
var text = data.toString('utf-8');
console.log(text);`
`// String -> Buffer
var buf = Buffer.from(text, 'utf-8');
console.log(buf);`
5、同步读取文件
除了标准的异步读取模式外，fs也提供相应的同步读取函数。同步读取的函数和异步读取函数相比，多了一个Sync后缀，并且不接受回调函数，函数直接返回结果。
`'use strict';
var fs = require('fs');
var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);`
可见，原异步调用的回调函数的data被函数直接返回，函数名需要改为readFileSync，其他参数不变。
如果读取同步文件发生错误，则需要用try...catch捕获该错误
`try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    // 出错了
}`
## 写文件
1、将数据下入文件是通过fs.writeFiel()实现的：
  `'use strict';
var fs = require('fs');
var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});`
writeFile()的参数一次为文件名、数据和回调函数。如果传入的数据是String默认按UTF-8编码形式写入文件，如果传入的参数是Buffer，和readFIle()类似，writeFile()也有一个同步方法，叫writeFileSync():
`'use strict';
var fs = require('fs');
var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);`
# stat
如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个stst对象，能告诉我们文件或目录的详细信息。
`'use strict';
var fs = require('fs');
fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});`
运行结果如下：
`isFile: true
isDirectory: false
size: 181
birth time: Fri Dec 11 2015 09:43:41 GMT+0800 (CST)
modified time: Fri Dec 11 2015 12:09:00 GMT+0800 (CST)`
stat()也有一个对应的同步函数staSync();
# 异步还是同步
由于Node环境执行JavaScript代码是服务器段代码，所以绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行期间，服务器将停止响应，引文JavaScript只有一个执行线程。
服务器启动时如果需要读取配置文件，或者结束是需要写入到状态文件时，可以使用同步代码，因为这些代码在启动和结束时执行一次，不影响服务器正常运行是的异步执行。
# stream
是Nodejs提供的又一个仅在服务端可用的模块，目的是支持“流”这种数据
什么是流：流是一种抽象的数据结构。比如标准的输入输出流。
有些时候用来读取数据，比如从文件独处数据时，可以打开一个文件流，然后从文件流中不断的读取数据，有些流用来写入数据，比如想文件写入数据是，只需要把数据不断的往文件中写进去就可以了。
在Nodejs中，流也是一个对象，我们只需要响应流的事件就可以了：data事件表示流的数据已经是可以读取了，end事件表示这个流已经到末尾了，没有数据可以读取了，erroe事件表示出错了
下面是一个从文件流读取文本内容的示例：
`'use strict';
var fs = require('fs');
// 打开一个流:
var rs = fs.createReadStream('sample.txt', 'utf-8');
rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});
rs.on('end', function () {
    console.log('END');
});
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
}); `
要注意：data时间可能会有多次，每次传递的chunk是流的一部分数据。要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束；
`'use strict';
var fs = require('fs');
var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();
var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();`
所有可以读取数据的流都继承自stream.Readable,所有可以写入的流都继承自stream.Writable
## pipe
就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe
在nodejs中，Readable流有一个pipe()方法，就用来干这件事情。
`'use strict';
var fs = require('fs');
var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');
rs.pipe(ws);`
默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭writable流，如果我们不希望自动关闭Writable流，需要传入参数：
`readable.pipe(writeable,{end: false})`
# HTTP协议
要理解Web服务器程序的工作原理，首先我们要对HTTP协议有基本的了解。
# HTTP服务器
要开发HTTP服务器程序，从头处理TCP链接，解析HTTP 是不现实的。这些工作实际上已经由Nodejs自带的http模块完成了。应用程序并不直接和hTTP协议打交道，而是操作http模块提供的request和response对象。
request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。
下面实现一个简单的Web程序hello.js,它对于所有请求，都返回Hell咯 world
`"use strict";
//导入http模块：
var http = require("http");
//创建http server，并传入回调函数：
var server = http.createServer(function(request,response){
    //回调函数接受request和response对象，
    //获取HTTP请求的method和url：
    console.log(request.method+":"+request.url);
    //将HTTP响应200写入response，同时设置Content-Type：text/html：
    response.writeHead(200,{"Content-Type":"text/html"});
    //将HTTP响应的HTML内容写入response：
    response.end("<h1>Hello world</h1>");
  });
  //让服务器监听8080端口
  server.listen(8080);
  console.log("Server is running at http://127.0.0.1:8080/")`
  在命令提示符下运行该程序，可以看到以下输出：
  `$ node hello.js
Server is running at http://127.0.0.1:8080/`
不要关闭命令提示符，直接打开浏览器输入`http://localhost:8080`，即可看到服务器响应的内容。同时，命令提示符窗口，可以看到打印的请求信息。

# 文件服务器
让我们继续扩展以下上面的Web程序。我们可以设定一个目录，然后让Web程序变成一个文件服务器。要实现这一点，我们只需要解析request.url中的路径，然后在本地找到对应的文件，把文件内容发送出去就可以。
解析URL需要用到nodejs提供的url模块，使用起来非常简单，通过parse()将一个字符串解析为一个url对象：
`'use strict';
var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));`
结果如下：
`Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/to/file',
  path: '/path/to/file?query=string',
  href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' }`
处理本地文件目录需要使用nodejs提供的path模块，它可以方便的构造目录：
`'use strict';
var path = require('path');
// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'
// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// '/Users/michael/pub/index.html'`
使用path模块可以正确处理操作系统相关的文件路径。在Windows系统下，返回的目录类似于`C:\Users\michael\static\index.html`，这样我们就不关心怎么拼接路径了。
实现一个文件服务器路径
`'use strict';
var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');
// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);
// 创建服务器:
var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');`
没有必要手动读取文件内容。由于response对象本身是一个Writable Stream，直接用pipe()方法就实现了自动读取文件内容并输出到HTTP响应。
在命令行运行`node file_server.js /path/to/dir`，把`/path/to/dir`改成你本地的一个有效的目录，然后在浏览器中输入`http://localhost:8080/index.html`
只要当前目录存在文件`inde.html`，服务器就可以把文件内容发送给浏览器。控制台会有响应的输出
练习：
在浏览器输入`http://localhost:8080/`时，会返回404，原因是程序识别出HTTP请求的不是文件，而是目录。请修改js文件，如果遇到请求的路径是目录，则自动在目录下一次搜索`index.html`、 `default.html`，如果找到了，就返回HTML文件的内容。
