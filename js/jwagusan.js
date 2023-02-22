// 💛nav탭
$(".tabButton").hover(function () {
  $(this).addClass("on").children('.tabBox').stop(true).slideToggle(300);
  $(".tabButton").not(this).stop(true).children('.tabBox').slideUp(300);
});

// 💛전체메뉴
$(".nav div:last-child > button:last-child").on("click", function () {
  $(".gnb").stop(true).slideToglle(300).animate({
    top : '100px'},1000, 'easeOutCirc'); 
  });


// $(".tabButton a").on("click", function () {
//   $(this).next().stop(true).slideToggle(300);
//   $(".tabButton a").not(this).next().slideUp(300);
//   return false;
// });

// $(".material-icons").click(function () {
//     $(this).text(function (e, text) {
//         return text === 'close' ? 'menu_open' : 'close';
//     });
//     $(".gnb > ul").toggleClass('on');
// })
// 💛main슬라이드
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var mainSwiper = new Swiper(".mainSwiper", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: ".mainSwiper .swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".mainSwiper .swiper-button-next",
    prevEl: ".mainSwiper .swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

// 💛프로그램소개 슬라이드
var programSwiper = new Swiper(".programSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".programSwiper .swiper-button-next",
    prevEl: ".programSwiper .swiper-button-prev",
  },
  pagination: {
    el: ".programSwiper .swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  rewind: true,
});

// 💛공지사항버튼
$(".eventHeader button").click(function () {
  var tabindex = $(this).index();
  console.log(tabindex);
  $(this).addClass('on').siblings().removeClass('on');
  $(".eventDate").eq(tabindex).addClass('on').siblings().removeClass('on');
});
$(".eventHeader button").eq(0).trigger('click')

// 💛여행정보 슬라이드
// var tripSwiper = new Swiper(".tripSwiper", {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   pagination: {
//     el: ".tripSwiper .swiper-pagination",
//     clickable: true,
//   },
//   spaceBetween: 30,
//   // centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true
//   },
//   pagination: {
//     el: ".tripSwiper .swiper-pagination",
//     clickable: true,
//   },
//   slidesPerGroup: 2,
// });

var tripSwiper = new Swiper(".tripSwiper", {
  slidesPerView: 1,
  // spaceBetween: 10,
  pagination: {
    el: ".tripSwiper .swiper-pagination",
    clickable: true,
  },
  spaceBetween: 10,
  // centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: ".tripSwiper .swiper-pagination",
    clickable: true,
  },
  // slidesPerGroup: 2,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});


// 💛주소복사
let copyAddres = document.querySelectorAll('.addres');
Array.from(copyAddres).forEach((p) => {
  p.addEventListener('click', function () {
    let addres = this.textContent;
    window.navigator.clipboard.writeText(addres).then(() => {
      alert("주소가 복사 되었습니다.");
    });
  });
});

