const exSlides = document.querySelector('.exhi_slides'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('.exhi_slide');
let excurrentIdx = 0; //현재 슬라이드 index
const exSlideCount = slideImg.length; // 슬라이드 개수
const exPrev = document.querySelector('.ex_prev'); //이전 버튼
const exNext = document.querySelector('.ex_next'); //다음 버튼
const exSlideWidth = 1400; //한개의 슬라이드 넓이


//전체 슬라이드 컨테이너 넓이 설정
exSlides.style.width = exSlideWidth  * exSlideCount + 'px';

function moveSlide(num) {
exSlides.style.left = -num * 1400 + 'px';
excurrentIdx = num;
console.log(exSlides);
}


exPrev.addEventListener('click', function () {
/*첫 번째 슬라이드로 표시 됐을때는 
이전 버튼 눌러도 아무런 반응 없게 하기 위해 
currentIdx !==0일때만 moveSlide 함수 불러옴 */
if (excurrentIdx !== 0) {
  moveSlide(excurrentIdx - 1);
  }
  console.log(excurrentIdx);
});

exNext.addEventListener('click', function () {
/* 마지막 슬라이드로 표시 됐을때는 
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만 
moveSlide 함수 불러옴 */
if (excurrentIdx !== exSlideCount - 1) {
    moveSlide(excurrentIdx + 1);
}
console.log(excurrentIdx);
});

