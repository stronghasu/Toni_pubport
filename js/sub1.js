$ (function(){
    function slideMove(){
        $(".slide-btn li").removeClass("on");
        $(".slide-btn li").eq(slideNumber).addClass("on");

        $(".slide1").stop().fadeOut();
        $(".slide1").eq(slideNumber).stop().fadeIn();
    }

    $(".slide-btn li").on("click",function(){
        slideNumber = $(this).index();
        slideMove();

    });



});