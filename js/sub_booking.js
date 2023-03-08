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
    return text === 'close' ? 'menu' : 'close';
  });
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
      element.classList.remove('choiceDay');            //선택된 날짜 일괄 삭제
    });

  }
  if (document.getElementsByClassName("choiceDay")[0]) {
    // console.log(choiceDay.length);//체크아웃 찍을때
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
  url: "js/sub_booking.json",
  dataType: "json",
  success: function (data) {
    var elem = "";
    $.each(data, function (index, obj) {
      // this는 각 obj를 의미한다.
      elem += `<div class="roomImg">`;
      elem += `<img src='${this.img}' alt='${this.name}'>`;
      elem += `<a>${this.link}</a>`;
      elem += `</div>`;
      elem += `<div class="detail">`;
      elem += `<p>${this.name}</p>`;
      elem += `<p>${this.people}</p>`;
      elem += `<p>${this.option}</p>`;
      elem += `<p>${this.time}</p>`;
      elem += `<button>${this.button}</button>`;
      elem += `<h3 class="oPrice">${this.price}</h3>`;
      elem += `</div>`;
    });
    $(".room").append(elem);
  },
  error: function (xhr) {
    console.log(xhr.status + "/" + xhr.errorText);
  }
});


//💛가격계산

