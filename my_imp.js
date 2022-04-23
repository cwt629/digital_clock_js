const dateDiv = document.querySelector(".date");
const timeDiv = document.querySelector(".time");

function expressClock(){
    // 현재 날짜 및 시간 받아오기
    const now = new Date();
    // 연, 월, 일, 시, 분, 초 받아오기
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // 1월이 0, 2월이 1, ...
    var day = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    // 한자리 수의 경우, 10의 자리에 0을 추가하기
    month = (month < 10)? `0${month}` : month;
    day = (day < 10)? `0${day}` : day;
    hour = (hour < 10)? `0${hour}` : hour;
    min = (min < 10)? `0${min}` : min;
    sec = (sec < 10)? `0${sec}` : sec;

    // 시간 표시
    dateDiv.textContent = `${year}년 ${month}월 ${day}일`;
    timeDiv.textContent = `${hour}:${min}:${sec}`;
}

// 시작할 때 한번 받아오기 + milliseconds 받아오기
expressClock();

// 이후 1초마다 함수 호출
setInterval(expressClock, 1000);