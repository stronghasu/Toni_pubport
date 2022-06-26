$ (function(){
    // gnb 투뎁스
    $(" .gnb > li ").on("mouseenter",function(){
        $(this).children(".gnb-depth2").addClass("show")
        
    });
    $(" .gnb > li ").on("mouseleave",function(){
        $(this).children(".gnb-depth2").removeClass("show")

    });
   //login 투뎁스 
   $(" .gnb-login li:nth-child(1) ").on("mouseenter",function(){
    $(this).children(".login-depth").addClass("show")
    
    });
    $(" .gnb-login li:nth-child(1) ").on("mouseleave",function(){
        $(this).children(".login-depth").removeClass("show")

    });
    // aos
    AOS.init(); 
    // cont1 캐릭터 움직이기
    $(window).on("mousemove",function(event){
        let mouseX = event.pageX/500;
        let mouseY = event.pageY/500;
        
        $(".stagebox:nth-child(2)").css({"left":46+mouseX +"%","top":54+mouseY+"%"});
        $(".stagebox:nth-child(3)").css({"left":34-mouseX+"%","top":62+mouseY-"%"});
        $(".stagebox:nth-child(4)").css({"left":60+mouseX+"%","top":16+mouseY+"%"});
        $(".stagebox:nth-child(5)").css({"left":83-mouseX+"%","top":18+mouseY-"%"});
        $(".stagebox:nth-child(6)").css({"left":75+mouseX+"%","top":43+mouseY+"%"});
        $(".stagebox:nth-child(7)").css({"left":3-mouseX+"%","top":33+mouseY-"%"});
        $(".stagebox:nth-child(8)").css({"left":25+mouseX+"%","top":4+mouseY+"%"});



    })
    //cont2 스케줄표
    $(".time-pie li").on("click",function(event){
        event.preventDefault();
        let timeNumber = $(this).index();

        $(".time-pie li").removeClass("on");
        $(this).addClass("on");

        $(".time-program").removeClass("on");
        $(".time-program").eq(timeNumber).addClass("on");
    });
    // cont3최신동영상
    let movienumber = 0;
    $(".tv-left").on("click",function(event){
        event.preventDefault();
        if(movienumber == 0){
            movienumber =3;
        }
        else {movienumber --;}
        moviemove();
     });
    $(".tv-right").on("click",function(event){
        event.preventDefault();
        if(movienumber == 3){
            movienumber = 0;
        }
        else {movienumber ++;}
        moviemove();
    });
    function moviemove(){
        $(".movie-box").stop().fadeOut();
        $(".movie-box").eq(movienumber).stop().fadeIn();

    }
    // cont4 최신프로그램
    $(".videoall").on("mouseenter",function(){
        $(".cont4 .btn").hide();
    });
    $(".videoall").on("mouseleave",function(){
        $(".cont4 .btn").show();
    });
    $(".sec").on("mouseenter",function(){
        let vid = $(this).children("video").get(0);
        vid.currentTime = 0;
        vid.play();
        
        $(this).children("video").stop().animate({"opacity":"1"},1000);
        $(this).stop().animate({"width":"48%"},1000,function(){
            $(this).children("h3").stop().animate({"left":"3%"},1000);
            $(this).children("p").stop().animate({"left":"3%"},1000);
        });
        

    });
    $(".sec").on("mouseleave",function(){
        let vid = $(this).children("video").get(0);
        vid.pause();
        $(this).children("video").stop().animate({"opacity":"0"},1000);
        $(this).stop().animate({"width":"17%"},1000,function(){
            $(this).children("h3").stop().animate({"left":"-150%"},300)
            $(this).children("p").stop().animate({"left":"-200%"},500)
        });
        
    });
    // footer
    $(".go-brand-box > li").on("click",function(event){
        event.preventDefault();
        $(".go-brand").toggleClass("on");
    });
    $(".go-subsidiary-box > li").on("click",function(event){
        event.preventDefault();
        $(".go-subsidiary").toggleClass("on");
    });
});