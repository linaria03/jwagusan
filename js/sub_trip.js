// 💛nav탭
$(".tabButton").hover(function () {
  $(this).toggleClass("on").children('.tabBox').stop(true).slideToggle(300);
  $(".tabButton").not(this).removeClass('on').stop(true).children('.tabBox').slideUp(300);
});



// 💛전체메뉴

$(".menu").click(function () {
  $(".gnb").toggleClass("all");
  $(".tabBox").slideToggle();
  $(this).text(function (e, text) {
    return text === 'close' ? 'menu' : 'close';
  });
});


// 💛지도
var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(36.7853074, 127.5814886), // 지도의 중심좌표
        level: 8 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
    {
        content: `
        <img src="/images/좌구산천문대.jpg">
        <h2>좌구산천문대</h2>
        <ul class="content">
            <li>국내에서 가장 큰 365mm 굴절망원경이 설치되어 천체들의 생생한 모습을 직접 볼 수 있습니다.<br> 날씨와 상관없이 다양한 천문 우주컨텐츠를 관람 할 수 있고, 다양한 전시도 체험할 수 있습니다.</li>
            <li>운영시간 : </li>
            <li>월요일휴무,공휴일휴무</li>
            <li>동절기(11월~3월) 10:00 ~ 21:00</li>
            <li>하절기(4월~10월) 10:00 ~ 22:00</li>
        </ul>
        `, 
        latlng: new kakao.maps.LatLng(36.7103022,127.6491052)
    },
    {
        content: `
        <img src="/images/좌구산구름다리.jpg">
        <h2>좌구산명상구름다리</h2>
        <ul class="content">
            <li>좌구산 휴양랜드의 랜드마크 명상구름다리 명상구름다리는 230m길이의 흔들다리입니다.
            </li>
        </ul>
        `,
        latlng: new kakao.maps.LatLng(36.7054168,127.6511754)
    },
    {
        content: `
        <img src="/images/거북이바위정원.jpg">
        <h2>거북이바위정원</h2>
        <ul class="content">
            <li>별주부전을 테마로 한듯 구성된 공원!</li>
        </ul>
        `, 
        latlng: new kakao.maps.LatLng(36.7054168, 127.6511754)
    },
    {
        content: `
        <img src="/images/자전거공원.jpg">
        <h2>증평자전거공원</h2>
        <ul class="content">
            <li>증평읍 남하용강로 16에 증평자전거공원과 어린이자전거교토안전교육장이 있습니다.</li>
        </ul>
        `,
        latlng: new kakao.maps.LatLng(36.7671278, 127.6044431)
    },
    {
      content: `
      <img src="/images/김득신문화관.jpg">
      <h2>김득신문화관</h2>
      <ul class="content">
          <li>증평의 위인!<br>독서인들의 귀감이 되는 김득신을 기리는 문학관
          </li>
          <li>운영시간 : </li>
          <li>월요일정기휴무, 09:00 ~ 18:00
          </li>
      </ul>
      `, 
      latlng: new kakao.maps.LatLng(36.7895872, 127.5800624)
  },
  {
    content: `
    <img src="/images/보강천.jpg">
    <h2>보강천미루나무숲</h2>
    <ul class="content">
        <li>보강천변에 숲이 조성이 되어있고, 답답한 삶에 여유를 줄만한 곳입니다.
        </li>
    </ul>
    `, 
    latlng: new kakao.maps.LatLng(36.7895872, 127.5800624)
},
{
  content: `
  <img src="/images/오일장.jpg">
  <h2>장뜰시장 오일장</h2>
  <ul class="content">
      <li>여행에 빠질수 없는 먹거리!<br>1일, 6일에만 만날 수 있는 오일장 싱싱하고 저렴한 농수산식품과 맛있는 먹거리를 즐길 수 있어요.
      </li>
  </ul>
  `, 
  latlng: new kakao.maps.LatLng(36.7818446, 127.5808526)
},
{
  content: `
  <img src="/images/연암지질생태공원.jpg">
  <h2>연암지질생태공원</h2>
  <ul class="content">
      <li>괴정저수지 주변 테마가 있는 공원 다양한 지질관찰과 출렁다리 그리고 전망대까지!
      </li>
  </ul>
  `, 
  latlng: new kakao.maps.LatLng(36.8357272, 127.5941132)
},
{
  content: `
  <img src="/images/벨포레.jpg">
  <h2>벨포레</h2>
  <ul class="content">
      <li>모두가 즐길 수 있는 레저단지!<br>주요 시설로는 골프장,루지,동물체험목장 등이 있습니다.
      </li>
      <li>운영시간 : </li>
      <li>시설마다 다름(홈페이지 참고)
      </li>
  </ul>
  `, 
  latlng: new kakao.maps.LatLng(36.8451871, 127.5832282)
}
];

for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
    // kakao.maps.event.addListener(marker, 'mouseleave', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}






// //💛gif
// <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_5i5tlydx.json"  background="transparent"  speed="2"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>

