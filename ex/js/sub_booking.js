// 💛nav탭
$(".tabButton").hover(function () {
    $(this).toggleClass("on").children('.tabBox').stop(true).slideToggle(300);
    $(".tabButton").not(this).removeClass('on').stop(true).children('.tabBox').slideUp(300);
    // e.preventDefault();
    // e.stopPropagation();
    // return false;
  });
  
  
  
  // 💛전체메뉴
  
    $(".menu").click(function() {
      $(".gnb").toggleClass("all");
      $(".tabBox").slideToggle();
      // e.preventDefault();
      // e.stopPropagation();
      $(this).text(function(e, text) {
          return text === 'close' ? 'menu' : 'close'
      });
  });

  // 💛공지사항버튼
$(".chk button").click(function () {
  var tabindex = $(this).index();
  console.log(tabindex);
  $(this).addClass('on').siblings().removeClass('on');
  // $(".eventDate").eq(tabindex).addClass('on').siblings().removeClass('on');
});
$(".chk button").eq(0).trigger('click')

//💛객실 데이터
// $(".room").append("<img>");
// let room = {
//   single4 : {
//     src : "/images/sub_booking/시설예약-객실사진.png",
//     alt : "좌구산 휴양림 4인실",
//   }
// };

// $(".room >img").attr({
//   src: Object.values(single4)[0]
// });
