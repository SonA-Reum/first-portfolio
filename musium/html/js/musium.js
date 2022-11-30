
$(function(){
    history.scrollRestoration = "manual"
//-----------------------------------------------------풀다운메뉴------------------------------------------------
   $(".sub").css({display:"none"});
   $("#gnb li,.sub").hover(function(){
      $(".sub").stop().slideDown(500);
    },function(){
        $(".sub").stop().slideUp(500);
    });
    $("#lnb > ul > li").hover(function(){
        var i = $(this).index();
        $("#gnb ul li a").removeClass("on");
        $("#gnb ul li").eq(i).find("a").addClass("on");
    },function(){
         $("#gnb ul li a").removeClass("on");
    });

    
//------------------------------------------------------온에어 슬라이드---------------------------------------------- 
//------------------------------------------------------온에어 슬라이드---------------------------------------------- 
    var current = 0;
    $("#onair_page li").eq(0).addClass("on1"); 
      function move(i){
      if(current == i) return; 
      $("#onair_visual ul li").eq(current).css({left:"0"}).animate({left:"-100%"}); 
                                       
      $("#onair_visual ul li").eq(i).css({left:"100%"}).animate({left:"0"});
      current = i;
  } 
    
   $("#onair_page li").click(function(e){
       e.preventDefault();
       var i = $(this).index();
       $("#onair_page li").removeClass("on1");
       $(this).addClass("on1");  
       move(i);
       
   });

    function timer() {
        var n = current + 1;
        if(n == $("#onair_visual ul li").length) {
        n=0; 
      }
      $("#onair_page li").eq(n).trigger("click"); 
    }
    var interval = setInterval(timer, 3000);
  
    
    
    $("#onair_visual, #onair_page li, #onair_btn").hover(function(){
        clearInterval(interval);
    },function(){
        interval = setInterval(timer, 3000);
    });
   
    $(".onair_next").click(function(){
       timer(); 
    });
-
    $(".onair_prev").click(function(){
       var n = current -1;
        if(n == $("#visual ul li").length) {
            n=0;
        }
        $("#onair_page li").eq(n).trigger("click");
    });
    
    //-------------------------------------온에어 슬라이드 끝--------------------------------------
    //-------------------------------------온에어 슬라이드 끝--------------------------------------
    
    
    
    
    //-------------------------------------온에어2 슬라이드 시작--------------------------------------
    //-------------------------------------온에어2 슬라이드 시작--------------------------------------
        
    /*$(window).resize(function (){
     var width_size = window.outerWidth;
        if (width_size <= 1023) {
            
          }
    })*/
   
        var curr = 0;
    $("#page li").eq(0).addClass("on"); 
      function moves(j){
      if(curr == j) return;
      $("#visual ul li").eq(curr).css({left:"0"}).animate({left:"-100%"});
      $("#visual ul li").eq(j).css({left:"100%"}).animate({left:"0"}); 
      curr = j;
  } 
   $("#page li").click(function(e){
       e.preventDefault();
       var j = $(this).index(); 
       $("#page li").removeClass("on");
       $(this).addClass("on");
       moves(j);
       
   });
    
    function auto() {
        var m = curr + 1;
        if(m == $("#visual ul li").length) {
        m=0; 
      }
      $("#page li").eq(m).trigger("click");
    }
    var interval5 = setInterval(auto, 3000);
   
    $("#visual, #page li, #btn").hover(function(){
        clearInterval(interval5);
    },function(){
        interval5 = setInterval(auto, 3000);
    });
    
    $(".next").click(function(){
       auto(); 
    });
   
    $(".prev").click(function(){
       var m = curr -1; 
        if(m == $("#visual ul li").length) {
            m=0;
        }
        $("#page li").eq(m).trigger("click");
    });

  
    //-------------------------------------온에어2 슬라이드 끝--------------------------------------
    //-------------------------------------온에어2 슬라이드 끝--------------------------------------
    
    
    
    
    //-------------------------------------online art musium--------------------------------------
    //-------------------------------------online art musium--------------------------------------
       $(".con2").css({position:"relative",top:"70px",opacity:"0"});
       $(".con2fix").css({top:"0",opacity:"1"});
       $(".con7").css({position:"relative",top:"70px",opacity:"0"});
       $(".con7fix").css({top:"0",opacity:"1"});
       $(window).scroll(function(){
        var ht = $(window).height();
        var t = $(window).scrollTop();
        /*console.log(t);*/
           
        if(t>1400 && t<=2300){
             $(".con1").animate({"top":"0","opacity":"1"});
                }
        if(t>1700 && t<=3218){
             $(".con2").animate({"top":"0","opacity":"1"});
                }
        /*if(t>2118 && t<=3218){
             $(".con3").animate({"top":"0","opacity":"1"});
                }*/
        if(t>2500 && t<=3443){
             $(".con4").animate({"padding-right":"90px"},1000);
                }
        if(t>3000 && t<=3893){
             $(".con6").animate({"top":"0","opacity":"1"},1000);
                } 
        if(t>3400 && t<=4512){
             $(".con7").animate({"top":"0","opacity":"1"});
                }   
        if(t>4547 && t<=5347){
             $(".con5").animate({"padding-right":"90px"},1000);
                }        
      
    });
    $(window).resize(function (){
         var width_size = window.outerWidth;
          if (width_size > 1280) { 
       
             $(".con2").removeClass("con2").addClass("con2fix");
             $(".con7").removeClass("con7").addClass("con7fix");
      }
    });
    
    
    
   
    
    
    
    
    //------------------------------------------햄버거 메뉴-------------------------------------------------
      $(".menu1 a").click(function(e){
        e.preventDefault();
       $(this).siblings().slideToggle(500,"linear"); 
            });
         var status = true;   
        $(".hamburger_btn").click(function(){
             if(status) {
                 $(".hamburger_wrap").animate({right:"0"},500);
                 $(this).css({background:"url(images/hamburger_icon2.png"});
             } else {
                 $(".hamburger_wrap").animate({right:"-100%"},500);
                 $(this).css({background:"url(images/hamburger_icon3.png)"});
             }
             status = !status;
         });
    
        
});