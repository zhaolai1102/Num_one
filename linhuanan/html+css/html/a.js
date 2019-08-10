
var ulList = document.getElementById("list");
var liList = ulList.getElementsByTagName("li");
var newListObj = [];
var index = 0;
for(var i in liList) {
	if(typeof liList[i] != 'object') {
		continue;
	}
	newListObj.push(liList[i]);
	liList[i].style.cssText = "display:none";
}
var liLength = newListObj.length;

liShow();
function liShow() {
	index = 0;
	var activeList = ulList.getElementsByClassName('active');
	activeList[0].style.cssText = "display:show";
	child = activeList[0];
	for(;;) {
		var sub = child.previousSibling;
		if(sub == null) {
			break;
		}
		var type = child.previousSibling.nodeType;
		child = sub;
		if(type != 1) {
			continue;
		}
		index++;
	}
}

function run(ind) {
	if(ind >= liLength) {
		ind = 0;
		index = 0;
	}
	if(ind < 0) {
		ind = liLength-1;
		index = ind;
	}
	setColor();
	removeClass();
	newListObj[ind].setAttribute('class', 'active');
	newListObj[ind].style.cssText = "display:show";
}

function removeClass() {
	for(var i in newListObj) {
		newListObj[i].setAttribute('class','');
		newListObj[i].style.cssText = "display:none";
	}
}

// var totalWith = liList.length * 700;
// var leftValue = Number(ulList.style.width);
// var criList = document.getElementById("criList");
var aList = criList.getElementsByTagName("a");
// //切换等待时间
var waitTime = 3000;
// //true 为向左移动 
// //false 为向右移动
function moveUl() {
	index++;
	removeClass();
	run(index);
}
aList[0].style.cssText = "background-color:rgb(28,147,77)";
function setColor() {
	for (var i = 0; i < aList.length; i++) {
		if(i == index) {
			aList[i].style.cssText = "background-color:rgb(28,147,77)";
		} else {
			aList[i].style.cssText = "background-color:rgb(244,236,240)";
		}
	}
}

for (let i = 0; i < aList.length; i++) {
	aList[i].onclick = function() {
		clearInterval(setTime);
		removeClass();
		index = i;
		run(index);
		setTime = setInterval(moveUl,waitTime);
	};
}

var setTime = setInterval(moveUl,waitTime);

var scrollTarget = document.getElementsByClassName('gotop');
scrollTarget[0].onclick = function () {
	var total = getScrollTop()
	var gotop = setInterval(function() {
		total-=10;
		window.scrollTo(0,total);
		if(total < 0) {
			clearInterval(gotop);
		}
	}, 1);
}
scrollTarget[0].style.cssText = "display:none";
window.onscroll = function() {
	if(getScrollTop() < 1) {
		scrollTarget[0].style.cssText = "display:none";
	} else {
		scrollTarget[0].style.cssText = "display:show";
	}
}

function getScrollTop() {
    var scroll_top = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scroll_top = document.body.scrollTop;
    }
    return scroll_top;
}

// var left = document.getElementById("left");
// left.onclick = function () {
// 	clearInterval(setTime);
// 	index--;
// 	removeClass();
// 	run(index);
// 	setTime = setInterval(moveUl,waitTime);
// }

// var right = document.getElementById("right");
// right.onclick = function () {
// 	clearInterval(setTime);
// 	index++;
// 	removeClass();
// 	run(index);
// 	setTime = setInterval(moveUl,waitTime);
// }