// 💛nav탭
$(".tabButton").hover(function () {
  $(this).toggleClass("on").children('.tabBox').stop(true).slideToggle(300);
  $(".tabButton").not(this).removeClass('on').stop(true).children('.tabBox').slideUp(300);
  // e.preventDefault();
  // e.stopPropagation();
  // return false;
});



// 💛전체메뉴

$(".menu").click(function () {
  $(".gnb").toggleClass("all");
  $(".tabBox").slideToggle();
  // e.preventDefault();
  // e.stopPropagation();
  $(this).text(function (e, text) {
    return text === 'close' ? 'menu' : 'close'
  });
});


// 💛지도
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = {
    center: new kakao.maps.LatLng(36.7054168, 127.6511754), // 지도의 중심좌표
    level: 9 // 지도의 확대 레벨
  };
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
// // 커스텀 오버레이가 표시될 위치입니다 
// var position = new kakao.maps.LatLng(36.7103022
//   , 127.6491052
// );
// // 커스텀 오버레이를 생성합니다
// var customOverlay = new kakao.maps.CustomOverlay({
//   position: position,
//   content: content,
//   xAnchor: 0.3, 
//   yAnchor: 0.91
// });
// // 커스텀 오버레이를 지도에 표시합니다
// customOverlay.setMap(map);







// //💛gif
// <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_5i5tlydx.json"  background="transparent"  speed="2"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>

