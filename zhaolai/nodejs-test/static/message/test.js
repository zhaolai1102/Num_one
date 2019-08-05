// // // 接受一个邮箱地址，返回邮箱所对应的用户名，公司
// // // 3211345@543.com

// // companylist = {"163":"网易", "qq":"腾讯"};
// // say = "该公司尚未加入清单";

// function check(){
// var strl = "929486632@123.com";
// var a = strl.match(/\w(?<g>\w)/g);
// alert(a.groups.g);
// check();
// 	// var email = "929486632@123.com";
// 	// var a = email.search(/(\w+)@(\w+?)\./g);
// 	// var name = RegExp.$1;
	// var company = RegExp.$2;
	// alert(name);
	// alert(company);
	// var b = email.search(/\./);
	// var com = "";
	// for (var i = a+1; i < b; i++) {
	// 	com += email[i];
	// }
	// if(!companylist[com]){
	// 	var company = say；
	// }else{
	// 	var company = companylist[com]；
	
	// }
// 	var name = "";
// 	for(var i = 0; i < a; i++){
// 		name += email[i]；
// 	}
// 	alert(name)；
// 	alert(company)；
// }
// check();
// var strl = "929486632@123.com";
// var a = strl.search(/(\w+)@(\w+?)\./g);
// alert(RegExp.$1);
// alert(RegExp.$2);
// var today = new Date();
// var time = today.getTime();
// var day = today.getDate();
// var month = today.getMonth();
// var year = today.getFullYear();
// var hour = today.getHours();
// var minute = today.getMinutes(): al;
// var second = today.getSeconds();
// var str = today.toString();
// var datestr = today.toDateString();
// var timestr = today.toTimeString();
// alert(time);
// alert(year);
// alert(month);
// alert(day);
// alert(hour);
// alert(minute);
// alert(second);
// alert(str);
// alert(datestr);
// alert(timestr);
// var a = new Date();
// alert(a.getTime())
num = 0;

var t2 = window.setInterval(function() {
	alert(num);
	num ++;
},1000)
