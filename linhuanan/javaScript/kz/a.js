
var ulList = document.getElementById("list");
var liList = ulList.getElementsByTagName("li");
var totalWith = liList.length * 700;
var leftValue = Number(ulList.style.width);
var criList = document.getElementById("criList");
var aList = criList.getElementsByTagName("a");
//切换等待时间
var waitTime = 3000;
//true 为向左移动 
//false 为向右移动
function moveUl(fx = false) {
	if(fx) {
		if((leftValue) < 0) {
			leftValue += 700;
		} else {
			leftValue = 0-totalWith+700;
		}
	} else {
		leftValue -= 700;
		if((0 - leftValue) == totalWith) {
			leftValue = 0;
		}
	}
	console.dir(leftValue);
	setColor();
	ulList.style.cssText =  "left:" + leftValue + "px";
}
aList[0].style.cssText = "background-color:rgb(28,147,77)";
function setColor() {
	var index = 0 - (leftValue/700);
	for (var i = 0; i < aList.length; i++) {
		if(i == index) {
			aList[i].style.cssText = "background-color:rgb(28,147,77)";
		} else {
			aList[i].style.cssText = "background-color:rgb(244,236,240)";
		}
	}
}

for (var i = 0; i < aList.length; i++) {
	aList[i].onclick = function() {
		clearInterval(setTime);
		var index = this.getAttribute("abc");
		leftValue = 0 - ((index-2) * 700);
		moveUl();
		setTime = setInterval(moveUl,waitTime);
	}
}

var setTime = setInterval(moveUl,waitTime);

var left = document.getElementById("left");
left.onclick = function () {
	clearInterval(setTime);
	moveUl(true);
	setTime = setInterval(moveUl,waitTime);
}

var right = document.getElementById("right");
right.onclick = function () {
	clearInterval(setTime);
	moveUl();
	setTime = setInterval(moveUl,waitTime);
}