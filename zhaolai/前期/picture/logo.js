count = 0;
var t2 = window.setInterval(function() {
	var a = document.getElementsByTagName('a');
	alert(a[count]);
	var href = a[count].getAttribute("href");
	var clock = document.getElementById('clock');
	count += 3;
	clock.href = href;
	if(count == 12){
		count = 0;
	}
},2000);