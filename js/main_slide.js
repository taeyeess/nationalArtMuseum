$(document).ready(function(){
    var current = 0;
    $("#btn .list li").eq(current).addClass("on");
    
    $("#btn .list li").click(function(){
        $("#btn .list li").removeClass("on");
        var i = $(this).index();
        slideTarget(i);
    });

    $("#btn .icon .next").click(function(){
        if(current < 3){
            current++;
            $("#btn .list li").removeClass("on");
            slideTarget(current);
        }else{
            current = 0;
            $("#btn .list li").removeClass("on");
            slideTarget(current);
        }
    });

    $("#btn .icon .prev").click(function(){
        if(current > 0){
            current--;
            $("#btn .list li").removeClass("on");
            slideTarget(current);
        }else{
            current = 3;
            $("#btn .list li").removeClass("on");
            slideTarget(current);
        }
    });

    function slideTarget(n){
        var pos = n * -1920 + "px";
        current = n;
        $("#main_img").animate({left:pos}, function(){
            $("#btn .list li").eq(n).addClass("on");
        } );
    }
});
