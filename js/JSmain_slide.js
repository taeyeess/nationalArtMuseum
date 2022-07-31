const slides = document.querySelector('#main_img'); //전체 슬라이드 컨테이너
const slideImg = document.querySelectorAll('#main_img .slide'); //모든 슬라이드들
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; // 슬라이드 개수
const prev = document.querySelector('.prev'); //이전 버튼
const next = document.querySelector('.next'); //다음 버튼
const slideWidth = 1920; //한개의 슬라이드 넓이


//전체 슬라이드 컨테이너 넓이 설정
slides.style.width = slideWidth  * slideCount + 'px';

function moveSlide(num) {
slides.style.left = -num * 1920 + 'px';
currentIdx = num;
}

prev.addEventListener('click', function () {
/*첫 번째 슬라이드로 표시 됐을때는 
이전 버튼 눌러도 아무런 반응 없게 하기 위해 
currentIdx !==0일때만 moveSlide 함수 불러옴 */

if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
/* 마지막 슬라이드로 표시 됐을때는 
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만 
moveSlide 함수 불러옴 */
if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
}
});

