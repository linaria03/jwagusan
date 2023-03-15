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

// 💛공지사항버튼
$(".chk button").click(function () {
  var tabindex = $(this).index();
  // console.log(tabindex);
  $(this).addClass('on').siblings().removeClass('on');
  // $(".eventDate").eq(tabindex).addClass('on').siblings().removeClass('on');
});
$(".chk button").eq(0).trigger('click');


//💛달력
window.onload = function () { buildCalendar(); };    // 웹 페이지가 로드되면 buildCalendar 실행

let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
let today = new Date();     // 페이지를 로드한 날짜를 저장
today.setHours(0, 0, 0, 0);    // 비교 편의를 위해 today의 시간을 초기화

// 💚달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
function buildCalendar() {

  let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
  let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

  let tbody_Calendar = document.querySelector(".Calendar > tbody");
  document.getElementById("calYear").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
  document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

  while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
    tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
  }

  let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

  for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
    let nowColumn = nowRow.insertCell();        // 열 추가
  }

  for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

    let nowColumn = nowRow.insertCell();        // 새 열을 추가하고


    let newDIV = document.createElement("p");
    newDIV.innerHTML = leftPad(nowDay.getDate());        // 추가한 열에 날짜 입력
    nowColumn.appendChild(newDIV);

    if (nowDay.getDay() == 6) {                 // 토요일인 경우
      nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
    }

    if (nowDay < today) {                       // 지난날인 경우
      newDIV.className = "pastDay";
      //클릭이벤트 막기 추가
    }
    else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
      newDIV.className = "today";
      newDIV.onclick = function () { choiceDate(this); };
    }
    else {                                      // 미래인 경우
      newDIV.className = "futureDay";
      newDIV.onclick = function () { choiceDate(this); };
    }
  }
}

// 💚날짜 선택

function choiceDate(newDIV) {
  var choiceDay = document.querySelectorAll(".choiceDay");
  var yyyy = document.querySelector('#calYear').textContent;
  var mm = document.querySelector('#calMonth').textContent;
  var dd = newDIV.textContent;
  var chkDay = `${yyyy}년 ${mm}월 ${dd}일`;
  if (document.getElementsByClassName("choiceDay")[1]) {
    // console.log(choiceDay.length);// 초기화 될때
    choiceDay.forEach((element) => {
      element.classList.remove('choiceDay');           //선택된 날짜 일괄 삭제
      checkIn.textContent = '숙박 시작일 선택'
      checkOut.textContent = '숙박 종료일 선택'
      totalAmount.textContent = '숙소를 선택해주세요'
    });
  }
  else if (document.getElementsByClassName("choiceDay")[0]) {
    // console.log(choiceDay.length);//체크아웃 찍을때
    newDIV.parentNode.classList.add("choiceDay");
    checkOut.innerText = chkDay;
  } else {
    newDIV.parentNode.classList.add("choiceDay");           // 선택된 날짜(td)에 "choiceDay" class 추가
    // console.log(choiceDay.length);//체크인 찍을때
    checkIn.innerText = chkDay;
  }

}


// 💚이전달 버튼 클릭
function prevCalendar() {
  nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
  buildCalendar();    // 달력 다시 생성
}
// 💚다음달 버튼 클릭
function nextCalendar() {
  nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
  buildCalendar();    // 달력 다시 생성
}

// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
function leftPad(value) {
  if (value < 10) {
    value = "0" + value;
    return value;
  }
  return value;
}


//💛객실 json
$.ajax({
  type: "GET",
  url: "js/sub_booking_pay.json",
  dataType: "json",
  success: function (data) {
    var elem = "";
    $.each(data, function (index, obj) {
      // this는 각 obj를 의미한다.
      elem += `<div class="roomImg">`;
      elem += `<img src='${this.img}' alt='${this.name}'>`;
      // elem += `<a>${this.link}</a>`;
      elem += `</div>`;
      elem += `<div class="detail">`;
      elem += `<p>${this.name}</p>`;
      elem += `<p>${this.people}</p>`;
      elem += `<div class="option">${this.option}
      <span class="material-symbols-outlined">
      tv</span><span class="material-symbols-outlined">
      kitchen</span><span class="material-symbols-outlined">
      cooking</span><span class="material-symbols-outlined">
      soup_kitchen</span><span class="material-symbols-outlined">
      multicooker</span><span class="material-symbols-outlined">
      outdoor_grill</span><span class="material-symbols-outlined">
      wc</span>
      </div>`;
      elem += `<p>입/퇴실시간 : ${this.time}</p>`;
      elem += `<button>${this.button}</button>`;
      elem += `<div class="price">가격 : 
      <span>(평일)<span class="dayPrice">${this.dayPrice}</span><span>
      <span>(주말)<span class="weekPrice">${this.weekPrice}</span><span>
      <span>(성수기)<span class="peak">${this.peak}</span><span>
      </div>`;
      elem += `</div>`;
    });
    $(".room").append(elem);
    $(".detail button").on("click", function () {

      let chkIn = checkIn.textContent;
      let chkOut = checkOut.textContent;
      let chkInDay = chkIn.replace("년 ", "-").replace("월 ", "-").replace("일", "");
      let chkOutDay = chkOut.replace("년 ", "-").replace("월 ", "-").replace("일", "");
      let calcDay = getDateDiff(chkOutDay, chkInDay);
      let dayPrice = this.nextSibling.childNodes[1].childNodes[1].textContent;
      let total = `${calcDay * dayPrice}원`;
      // let total = `${calcDay * dayPrice}`;
      // let total = `${calcDay * dayPrice}`;
      totalAmount.innerText = numberWithCommas(total);
      
      
      
      //       const price = "total"; // <- String Type
      // // const price = total; // <- String Type
      // const format = Number(price).toLocaleString();
      // console.log(format);
    });
  },
  error: function (xhr) {
    console.log(xhr.status + "/" + xhr.errorText);
  }
});
function numberWithCommas(total) {
  return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
}

//💛 날짜차이 구하기
const getDateDiff = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffDate = date1.getTime() - date2.getTime();
  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
};

//콤마 표시
// function numberWithCommas(total) {
//   return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
// console.log(numberWithCommas(total))




//       const price = "total"; // <- String Type
// // const price = total; // <- String Type
// const format = Number(price).toLocaleString();
// console.log(format);









