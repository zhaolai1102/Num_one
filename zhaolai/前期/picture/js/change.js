// function prepa(){
// 	var pic = document.getElementById("picture");
// 	var pics = pic.getElementsByTagName("a");
// 	for(var i = 0; i < pics.length ; i ++){
// 		pics[i].onclick = function(){
// 			change(this);
// 			return false;
// 		}
// 	}
// }
// function change(whichpic){
// 	var href = whichpic.getAttribute("href");
// 	var img = document.getElementById('positon');
// 	img.setAttribute("src",href);
// 	var name = whichpic.firstChild.nodeValue;
// 	var dis = document.getElementById('name');
// 	dis.firstChild.nodeValue = name;
// 	return true;
// }
// function biaoji(){
// 	var body_element = document.getElementsByTagName('body')[0].childNodes;
// 	alert(body_element.length);
// 	for (var i = 0; i < body_element.length; i++) {
// 		alert(body_element[i]);
// 	}
// }
// // window.onload = function(){
// // 	prepa();
// // 	biaoji();
// // }
// function load(func){
// 	var oldload = window.onload;
// 	if (typeof window.onload != "function"){
// 		window.onload = func;
// 	}else{
// 		window.onload = function(){
// 			oldload();
// 			func();
// 		}
// 	}
// }
// load(biaoji);
// load(prepa);


var a = document.getElementsByTagName("a");
alert(a.length);