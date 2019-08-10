$(document).ready(function(){
  // 搜索框
  $("#show").hover(function(){
    $("#show").css("background","rgba(240, 20, 20, 0.4)");
    $("#show i").css("color","#F01414");
  },function(){
    $("#show").css("background","none");
    $("#show i").css("color","rgb(117,122,126)");
  });
  $("#search input").focus(function(){
    $("#show").css("background","rgba(240, 20, 20, 0.4)");
    $("#show i").css("color","#F01414");
    $("#search div").css("border-bottom","1px solid #F01414");
  });
  $("#search input").blur(function(){
    $("#show").css("background","none");
    $("#show i").css("color","rgb(117,122,126)");
    $("#search div").css("border-bottom","1px solid #D9DDE1");
  });
  //轮播图
  var lunbo=1;
  var lunboList=[".img-1",".img-2",".img-3",".img-4",".img-5",".img-6"];
  var imgList=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
  var pointList=[".point-1",".point-2",".point-3",".point-4",".point-5",".point-6"];

  function lunboFunc(){
    if(lunbo==0){
      $(lunboList[5]).css("display","none");
      $(pointList[5]).css("background","black");
    }else{
      $(lunboList[lunbo-1]).css("display","none");
      $(pointList[lunbo-1]).css("background","black");
    }
    $(lunboList[lunbo]).fadeIn(1000);
    $(pointList[lunbo]).css("background","white");
    $(".part1-5").css("background","url("+imgList[lunbo]+")");
    lunbo ++;
    if (lunbo == 6) {
      lunbo=0;
    }
  }
  var interval = setInterval(lunboFunc,4000);
  //轮播图按钮
  $(".point-6").click(function(){
    for (var i = 0; i < 6; i++) {
      $(pointList[i]).css("background","black");
      $(lunboList[i]).css("display","none");      
    }
    $(pointList[5]).css("background","white");
    $(lunboList[5]).fadeIn(1000);
    $(".part1-5").css("background","url("+imgList[5]+")");
    lunbo=0;
  });
  $(".point-5").click(function(){
    for (var i = 0; i < 6; i++) {
      $(pointList[i]).css("background","black");
      $(lunboList[i]).css("display","none");      
    }
    $(pointList[4]).css("background","white");
    $(lunboList[4]).fadeIn(1000);
    $(".part1-5").css("background","url("+imgList[4]+")");
    lunbo=5;
  });
  $(".point-4").click(function(){
    for (var i = 0; i < 6; i++) {
      $(pointList[i]).css("background","black");
      $(lunboList[i]).css("display","none");      
    }
    $(pointList[3]).css("background","white");
    $(lunboList[3]).fadeIn(1000);
    $(".part1-5").css("background","url("+imgList[3]+")");
    lunbo=4;
  });
  $(".point-3").click(function(){
    for (var i = 0; i < 6; i++) {
      $(pointList[i]).css("background","black");
      $(lunboList[i]).css("display","none");     
    }
    $(pointList[2]).css("background","white");
    $(lunboList[2]).fadeIn(1000);
    $(".part1-5").css("background","url("+imgList[2]+")");
    lunbo=3;
  });
  $(".point-2").click(function(){
    for (var i = 0; i < 6; i++) {
      $(pointList[i]).css("background","black");
      $(lunboList[i]).css("display","none");      
    }
    $(pointList[1]).css("background","white");
    $(lunboList[1]).fadeIn(1000);
    $(".part1-5").css("background","url("+imgList[1]+")");
    lunbo=2;
  });
  $(".point-1").click(function(){
    for (var i = 0; i < 6; i++) {
      $(pointList[i]).css("background","black");
      $(lunboList[i]).css("display","none");      
    }
    $(pointList[0]).css("background","white");
    $(lunboList[0]).fadeIn(1000);
    $(".part1-5").css("background","url("+imgList[0]+")");
    lunbo=1;
  });
  $("#left").click(function(){
    for (var i = 0; i < 6; i++) {
      $(pointList[i]).css("background","black");
      $(lunboList[i]).css("display","none");      
    }
    if(lunbo>1){
      $(pointList[lunbo-2]).css("background","white");
    $(lunboList[lunbo-2]).fadeIn(1000);
    $(".part1-5").css("background","url("+imgList[lunbo-2]+")");
    }else{
      $(pointList[lunbo+4]).css("background","white");
    $(lunboList[lunbo+4]).fadeIn(1000);
    $(".part1-5").css("background","url("+imgList[lunbo+4]+")");
    }
    if(lunbo>0){
      lunbo=lunbo-1;
    }else{
      lunbo=5;
    }
  });
  $("#right").click(function(){
    for (var i = 0; i < 6; i++) {
      $(pointList[i]).css("background","black");
      $(lunboList[i]).css("display","none");      
    }
    $(pointList[lunbo]).css("background","white");
    $(lunboList[lunbo]).fadeIn(1000);
    $(".part1-5").css("background","url("+imgList[lunbo]+")");
    lunbo ++;
    if (lunbo == 6) {
      lunbo=0;
    }
  });
  //移入移出轮播图
  $(".part1-3").hover(function(){
    clearInterval(interval);
  },function(){
    interval = setInterval(lunboFunc,4000);
  })
  //下载APP
  $("#download").hover(function(){
    $("#download-hide").css("display","block");
  },function(){
      $("#download-hide").css("display","none");
  });
  $("#download-hide").hover(function(){
    $("#download-hide").css("display","block");
  },function(){
    $("#download-hide").css("display","none");
  });
  $("#download-hide a:nth(0)").hover(function(){
    $("#download-hide a:nth(0)").css("background","#07111B");
  },function(){
    $("#download-hide a:nth(0)").css("background","#4D555D");
  });
  $("#download-hide a:nth(1)").hover(function(){
    $("#download-hide a:nth(1)").css("background","#07111B");
  },function(){
    $("#download-hide a:nth(1)").css("background","#4D555D");
  });
  //购物车
  $("#shop div").hover(function(){
    $("#shopping span").css("color","red");
    $("#shopping i").css("color","red");
  },function(){
    $("#shopping span").css("color","#71777d");
    $("#shopping i").css("color","#71777d");
  });
  $("#shop-show").hover(function(){
    $("#shop-hide").css("display","block");
  },function(){
    $("#shop-hide").css("display","none");
  });
  $("#shop-hide").hover(function(){
    $("#shop-hide").css("display","block");
  },function(){
    $("#shop-hide").css("display","none");
  });
  // 固定导航栏
  $(".daohang-1").hover(function(){
    $(".daohang-1 img").css("display","none");
    $(".daohang-1 span").css("display","block");    
  },function(){
    $(".daohang-1 img").css("display","");
    $(".daohang-1 span").css("display","none");    
  });
  $(".daohang-2").hover(function(){
    $(".daohang-2 img").css("display","none");
    $(".daohang-2 span").css("display","block");    
  },function(){
    $(".daohang-2 img").css("display","");
    $(".daohang-2 span").css("display","none");    
  });
  $(".daohang-3").hover(function(){
    $(".daohang-3 img").css("display","none");
    $(".daohang-3 span").css("display","block");    
  },function(){
    $(".daohang-3 img").css("display","");
    $(".daohang-3 span").css("display","none");    
  });

  $(".daohang-4").hover(function(){
    $(".daohang-4 img").css("display","none");
    $(".daohang-4 span").css("display","block");
    $(".appdown").animate({
      "width": "+=172px",
      "height": "+=212px"
    },300);
  },function(){
    $(".daohang-4 img").css("display","");
    $(".daohang-4 span").css("display","none");
    $(".appdown").stop();
    $(".appdown").css("width","0");
    $(".appdown").css("height","0");
  });
  $(".daohang-5").hover(function(){
    $(".daohang-5 img").css("display","none");
    $(".daohang-5 span").css("display","block");
    $(".guanfangweixin").animate({
      "width": "+=172px",
      "height": "+=212px"
    },300);
  },function(){
    $(".daohang-5 img").css("display","");
    $(".daohang-5 span").css("display","none");
    $(".guanfangweixin").stop();
    $(".guanfangweixin").css("width","0");
    $(".guanfangweixin").css("height","0");
  });
  $(".daohang-6").hover(function(){
    $(".daohang-6 img").css("display","none");
    $(".daohang-6 span").css("display","block");    
  },function(){
    $(".daohang-6 img").css("display","");
    $(".daohang-6 span").css("display","none");    
  });  
  //回到顶部
  $(window).scroll(function(){
    var distance = $("html").scrollTop() + $("body").scrollTop();
    if(distance > 850){
      $("#back-top").css("display","block"); 
    }else{
      $("#back-top").css("display","none"); 
    }
  })
  $("#back-top").click(function(){
    var distance = $("html").scrollTop() + $("body").scrollTop();
    var time=500;
    var intervalTime=50;
    var itemDistance=distance/(time/intervalTime);
    console.log(itemDistance)
    var intervalTop = setInterval(function(){
      distance-=itemDistance;
      $("html,body").scrollTop(distance-itemDistance);
      if(distance<=0){
        clearInterval(intervalTop);
      }
    },intervalTime);
  });
  //第一部分的导航
  $(".lock1").hover(function(){
    $(".lock1").css("background","#6B7077");
    $(".show1").css("display","block");
  },function(){
    $(".lock1").css("background","");
    $(".show1").css("display","none");
  });
  $(".show1").hover(function(){
    $(".lock1").css("background","#6B7077");
    $(".show1").css("display","block");
  },function(){
    $(".lock1").css("background","");
    $(".show1").css("display","none");
  });
  $(".lock2").hover(function(){
    $(".lock2").css("background","#6B7077");
    $(".show2").css("display","block");
  },function(){
    $(".lock2").css("background","");
    $(".show2").css("display","none");
  });
  $(".show2").hover(function(){
    $(".lock2").css("background","#6B7077");
    $(".show2").css("display","block");
  },function(){
    $(".lock2").css("background","");
    $(".show2").css("display","none");
  });
  $(".lock3").hover(function(){
    $(".lock3").css("background","#6B7077");
    $(".show3").css("display","block");
  },function(){
    $(".lock3").css("background","");
    $(".show3").css("display","none");
  });
  $(".show3").hover(function(){
    $(".lock3").css("background","#6B7077");
    $(".show3").css("display","block");
  },function(){
    $(".lock3").css("background","");
    $(".show3").css("display","none");
  });
  $(".lock4").hover(function(){
    $(".lock4").css("background","#6B7077");
    $(".show4").css("display","block");
  },function(){
    $(".lock4").css("background","");
    $(".show4").css("display","none");
  });
  $(".show4").hover(function(){
    $(".lock4").css("background","#6B7077");
    $(".show4").css("display","block");
  },function(){
    $(".lock4").css("background","");
    $(".show4").css("display","none");
  });
  $(".lock5").hover(function(){
    $(".lock5").css("background","#6B7077");
    $(".show5").css("display","block");
  },function(){
    $(".lock5").css("background","");
    $(".show5").css("display","none");

  });
  $(".show5").hover(function(){
    $(".lock5").css("background","#6B7077");
    $(".show5").css("display","block");
  },function(){
    $(".lock5").css("background","");
    $(".show5").css("display","none");
  });
  $(".lock6").hover(function(){
    $(".lock6").css("background","#6B7077");
    $(".show6").css("display","block");
  },function(){
    $(".lock6").css("background","");
    $(".show6").css("display","none");
  });
  $(".show6").hover(function(){
    $(".lock6").css("background","#6B7077");
    $(".show6").css("display","block");
  },function(){
    $(".lock6").css("background","");
    $(".show6").css("display","none");
  });
  $(".lock7").hover(function(){
    $(".lock7").css("background","#6B7077");
    $(".show7").css("display","block");
  },function(){
    $(".lock7").css("background","");
    $(".show7").css("display","none");
  });
  $(".show7").hover(function(){
    $(".lock7").css("background","#6B7077");
    $(".show7").css("display","block");
  },function(){
    $(".lock7").css("background","");
    $(".show7").css("display","none");
  });
  $(".dianlight").hover(function(){
    $(this).find(".dian").css("color","red");
  },function(){
    $(this).find(".dian").css("color","#4D555D");
  });
  // 轮播图2
  $(".lunbo2-2").hover(function(){
    $(this).find("h1").hide();
    $(this).find("h2").hide();
    $(this).css("background","#FFFFFF");
    $(this).find("p").css("margin-top","146px");
    
    $(this).find("p").animate({
      marginTop:"-=85px",
      height:"168px"
    },300);
    $(this).find("img").animate({
      width:"-=36px",
      height:"-=36px",
      marginLeft:"+=18px"
    },300);
  },function(){
    $(this).find("p").stop();
    $(this).find("img").stop();
    $(this).find("img").css("margin-left","-48px");
    $(this).find("img").css("width","96px");
    $(this).find("img").css("height","96px");    
    $(this).css("background","rgba(255, 255, 255, 0.8)");
    $(this).find("p").css("margin-top","");
    $(this).find("p").css("height","72px");
    $(this).find("h1").show();
    $(this).find("h2").show();
  });
  //轮播2
  var lunbonum2 = 1;
  var lunboList2 = ["",""];


  function lunbo2(){
    let hide = $(".lunbo2-1").eq(lunbonum2);
    let show = $(".lunbo2-1").eq(1-lunbonum2);
    let hidep = $(".btb div").eq(lunbonum2);
    let showp = $(".btb div").eq(1-lunbonum2);
    hide.stop();
    show.stop();
    hide.css("left","1170px");
    show.css("left","0");
    hide.css("right","");
    show.css("right","");    
    hide.css("display","block");
    $(".lunbo2-1").animate({
      left:"-=1170px"
    },300);
    setTimeout(function(){
      show.css("display","none");
    },300);
    hidep.css("background","#FFF");
    hidep.css("opacity","1");
    showp.css("background","#000");
    showp.css("opacity",".2");    
    lunbonum2 ++;
    if(lunbonum2 ==2){
      lunbonum2 = 0;
    }
  };
  function lunbo3(){
    let hide = $(".lunbo2-1").eq(lunbonum2);
    let show = $(".lunbo2-1").eq(1-lunbonum2);
    let hidep = $(".btb div").eq(lunbonum2);
    let showp = $(".btb div").eq(1-lunbonum2);
    hide.stop();
    show.stop();    
    hide.css("right","1170px");
    show.css("right","0");
    hide.css("left","");
    show.css("left","");
    hide.css("display","block");
    $(".lunbo2-1").animate({
      right:"-=1170px"
    },300);
    setTimeout(function(){
      show.css("display","block");
    },300);
    hidep.css("background","#FFF");
    hidep.css("opacity","1");
    showp.css("background","#000"); 
    showp.css("opacity",".2"); 
    lunbonum2 ++;
    if(lunbonum2 ==2){
      lunbonum2 = 0;
    }
  }
  var interval2 = setInterval(lunbo2,4000);
  //轮播hover事件
  $(".lunbo2").hover(function(){
    clearInterval(interval2);
  },function(){
    interval2 = setInterval(lunbo2,4000);
  });
  $(".sas").hover(function(){
    clearInterval(interval2);
  },function(){
    interval2 = setInterval(lunbo2,4000);
  });
  //左右按钮
  $(".l-1").click(function(){
    lunbo3();
  });
  $(".r-1").click(function(){
    lunbo3();
  });
  //底部按钮
  $(".l-2").click(function(){
    if($(this).css("background-color") == "rgb(0, 0, 0)"){
      lunbo3();
    }
  });
  $(".r-2").click(function(){
    if($(this).css("background-color") == "rgb(0, 0, 0)"){
      lunbo2();
    }
  });
  //全明星
  $(".bg-blue").hover(function(){
    $(this).find(".inff").show();
    $(this).css("border","2px solid #008cc8");
  },function(){
    $(this).find(".inff").hide();
    $(this).css("border","2px solid #fff");
  });
  $(".bg-green").hover(function(){
    $(this).find(".inff").show();
    $(this).css("border","2px solid #00b46d");
  },function(){
    $(this).find(".inff").hide();
    $(this).css("border","2px solid #fff");
  });
  $(".bg-purple").hover(function(){
    $(this).find(".inff").show();
    $(this).css("border","2px solid #653ddd");
  },function(){
    $(this).find(".inff").hide();
    $(this).css("border","2px solid #fff");
  });
  //官方公众号
  $(".gzh").hover(function(){
    $(".gfgzh").show();
  },function(){
    $(".gfgzh").hide();
  });
  $(".gfgzh").hover(function(){
    $(".gfgzh").show();
  },function(){
    $(".gfgzh").hide();
  });
}); 
