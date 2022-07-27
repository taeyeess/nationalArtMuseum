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

var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 300,
    slideMargin = 50,
    prevBtn = document.querySelector('.l_btn'),
    nextBtn = document.querySelector('.r_btn');

    makeClone();

    function makeClone(){
        for(var i = 0; i < slideCount ; i++){
           // a.clonNode(), a.cloneNode(true)
           var cloneSlide= slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
           /// a.appendChild(b)
           slides.appendChild(cloneSlide);
        }
        for(var i = slideCount -1; i >= 0; i--){
           var cloneSlide= slide[i].cloneNode(true);
           cloneSlide.classList.add('clone');
           // a.prepend(b)
           slides.prepend(cloneSlide);
        }
        updateWidth();
        setInitialPos();
        setTimeout(function(){
            slides.classList.add('animated');
        },100);
        slides.classList.add('animated');
    };
   
    function updateWidth(){
        var currentSlides = document.querySelectorAll('.slides li');
        var newSlideCount = currentSlides.length;
        var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
        slides.style.width = newWidth;
   }
   function setInitialPos(){
       var initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
       // slides{transfrom:translateX();}
       slides.style.transform = 'translateX('+ initialTranslateValue +'px)';
   }
   
   nextBtn.addEventListener('click', function(){
       moveSlide(currentIdx + 1);
   });
   prevBtn.addEventListener('click', function(){
       moveSlide(currentIdx - 1);
   });
   
   function moveSlide(num){
       slides.style.left = -num*(slideWidth + slideMargin) +'px';
       currentIdx = num;
       console.log(currentIdx, slideCount);
       
       if(currentIdx == slideCount || currentIdx == -slideCount){
           
           setTimeout(function(){
               slides.classList.remove('animated');
               slides.style.left = '0px';
               currentIdx = 0;
           }, 500);
           setTimeout(function(){
               slides.classList.add('animated');
           },600);
           
       }
   }
