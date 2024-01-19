const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function(){
  //Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


/**window: 출력하는 화면 자체. 창.  */
// 0.3초 단위로 부하를 주기. 스크롤 액션 할때마다 계속 function 호출하지않기 위해 
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY>500){
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션); 요소 대신 선택자 넣는 것도 가능. 
    gsap.to(badgeEl, 0.6, {
      opacity:0,
      display:'none'
    });


    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x:0
    });

    }else{
    //배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity:1,
      display:'block'
    });
    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x:100
    });
  }
}, 300));

// _.throttle(함수,시간)

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7,{
    scrollTo:0
  })
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7,
    opacity :1,

  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction :'vertical',
  // 자동으로 슬라이드 재생여부
  autoplay: true,
  // 반복재생 여부(마지막 슬라이드 -> 첫 슬라이드)
  loop:true


});


new Swiper('.promotion .swiper', {
  // direction :'horizontal'가 디폴트 옵션
  // 자동으로 슬라이드 재생여부
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수 
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기 
  loop:true,
  autoplay:{
    delay: 5000 //5초
  },
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
}
);



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // 숨김 처리

    promotionEl.classList.add('hide');

  }else{
    // 보임 처리

    promotionEl.classList.remove('hide');

  }

});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
    y:size, //y축
    repeat: -1, //무한반복
    yoyo:true, // 한번 시작한 재생을 다시 되돌린다.
    // 구글 gsap easing 검색
    ease: Power1.easeInout, //몇초 뒤에 애니메이션을 실행하겠다.
    delay:random(0,delay)
  });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement:spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 //
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
