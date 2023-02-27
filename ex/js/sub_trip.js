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


// 💛지도

// //💛gif
// <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_5i5tlydx.json"  background="transparent"  speed="2"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>

