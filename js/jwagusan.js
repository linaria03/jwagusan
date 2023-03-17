// 💛nav탭
$(function () {
  // 메뉴클릭시 하위메뉴 슬라이드 다운
  // 하위메뉴가 열린상태에서 다른메뉴 클릭시 변경, 자기메뉴 클릭시 슬라이드 업
  $(".headerMenu").click(function () {
    $('.gnb, .gnb .inner, .subTitle').removeClass('on all');
    if ($(this).hasClass('on')) {
      $(this).removeClass('on');
      $("nav").removeClass('on').children().removeClass('on');
    } else {
      $("nav").addClass('on');
      $(this).addClass('on').siblings().removeClass('on');
      $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    }
  });
});


//💛 전체메뉴
$(".ham").click(function () {
  $(".gnb, .gnb .inner").toggleClass('all');
  $(".subTitle").toggleClass('on');

});

//💛 T전체메뉴
$(function(){
  $(".headerTmenu").click(function (e) {
      $(this).addClass('active').next().stop().slideToggle(300);
      $(".headerTmenu").not(this).removeClass('active').next().slideUp(300);
      e.preventDefault();
      e.stopPropagation();
  });
})



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
$(".eventHeader button").eq(0).trigger('click');

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



