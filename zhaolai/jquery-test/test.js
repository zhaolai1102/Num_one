"use strict"
const http = require("http");
const crypto = require("crypto");
const formidable = require("formidable");
const fs = require("fs");

http.createServer(function(req, res){
    if (req.url == '/upload' && req.method.toLowerCase() == 'post'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            const hmac = crypto.createHmac('sha256', 'secret-key');
            var now = new Date();
            var year = now.getFullYear(); //得到年份
            var month = now.getMonth();//得到月份
            var date = now.getDate();//得到日期
            var hour = now.getHours();//得到小时
            var minu = now.getMinutes();//得到分钟
            var sec = now.getSeconds();//得到秒
            var time = time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec
            hmac.update(fields.password);
            fs.appendFileSync("list.txt","username="+fields.uname+"\n","utf-8");
            fs.appendFileSync("list.txt","password="+hmac.digest("hex")+"\n","utf-8");
            fs.appendFileSync("list.txt","time="+time+"\n","utf-8");
            res.writeHead(200, {'content-type': 'text/html'});
            res.write("<!DOCTYPE html>");
            res.write("<html>");
            res.write("<head>");
            res.write("<title>表格</title>");
            res.write("<meta charset='utf-8'>");
            res.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
            res.write('<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css">');
            res.write('<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>');
            res.write('<script src="https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>');
            res.write('<script src="https://cdn.bootcss.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>');
            res.write('</head>');
            res.write('<body>');
            res.write('<div class="container">');
            res.write('<table class="table">');
            res.write("<thead>");
            res.write("<tr>");
            res.write("<th>id</th>");
            res.write("<th>username</th>");
            res.write("<th>password</th>");
            res.write("<th>time</th>");
            res.write("</tr>");
            res.write("</thead>");
            res.write("<tbody>");
            var data = fs.readFileSync("list.txt").toString().split("\n");
            var idnum = 1;
            for(var i = 0; i < data.length - 1; i++){
                var gooddata = data[i].split("=");
                if(gooddata[0] == "username"){
                    res.write("<tr>");
                    res.write("<td>");
                    res.write(idnum.toString());
                    idnum += 1;
                    res.write("</td>");
                    res.write("<td>");
                    res.write(gooddata[1]);
                    res.write("</td>");
                }
                if(gooddata[0] == "password"){
                    res.write("<td>");
                    res.write(gooddata[1]);
                    res.write("</td>");
                }
                if(gooddata[0] == "time"){
                    res.write("<td>");
                    res.write(gooddata[1]);
                    res.write("</td>");
                    res.write("</tr>");                   
                }
            }
            res.write('</tbody>');
            res.write('</table>');
            res.write('</div>');
            res.write('</body>'); 
            res.write('</html>'); 
            res.end();
        });
    }
}).listen(2000,'127.0.0.1');