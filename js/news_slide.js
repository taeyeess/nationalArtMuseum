let slides = document.querySelector('.news_slides'),
    slide = document.querySelectorAll('.news_slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 300,
    slideMargin = 50,
    prevBtn = document.querySelector('.l_btn'),
    nextBtn = document.querySelector('.r_btn');

    makeClone();

    function makeClone(){
        for(let i = 0; i < slideCount ; i++){
           // a.clonNode(), a.cloneNode(true)
           let cloneSlide= slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
           /// a.appendChild(b)
           slides.appendChild(cloneSlide);
        }
        for(let i = slideCount -1; i >= 0; i--){
           let cloneSlide= slide[i].cloneNode(true);
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
        let currentSlides = document.querySelectorAll('.news_slides li');
        let newSlideCount = currentSlides.length;
        let newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
        slides.style.width = newWidth;
   }
   function setInitialPos(){
       let initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
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
