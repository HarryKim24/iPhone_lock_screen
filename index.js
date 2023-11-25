// 마우스오버, 아웃
const box = document.querySelector(".box");
box.addEventListener("mouseover", function() {
  const inner = document.querySelector(".inner");
  const islandPopup = document.querySelector(".island-popup");
  inner.style.opacity = '1';
  if (!(flashLight.classList.contains('click'))) {
    islandPopup.style.width = '90px';
  }
})

box.addEventListener("mouseleave", function() {
  const inner = document.querySelector(".inner");
  const islandPopup = document.querySelector(".island-popup");
  inner.style.opacity = '0';
  islandPopup.style.width = '120px';
  const mobileCarrier = document.querySelector(".mobile-carrier");
  const signal = document.querySelector(".signal");
  const wifi = document.querySelector(".wifi");
  const battery = document.querySelector(".battery");
  mobileCarrier.style.translate = '-0px';
  signal.style.translate = '0px';
  wifi.style.translate = '0px';
  battery.style.translate = '0px';
})

// 날짜, 시계 
const today = document.querySelector(".today");
const currentTime = document.querySelector(".current-time");

const day = new Date();
let month = day.getMonth() + 1;
let date = day.getDate();
let hours = day.getHours();
let minutes = day.getMinutes(); 

function getDayOfWeek(date) {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[new Date(date).getDay()];
  return dayOfWeek;
}

function getClock() {
  const day = new Date();
  let month = day.getMonth() + 1;
  let date = day.getDate();
  let hours = day.getHours();
  let minutes = day.getMinutes();

  if (hours == 0) {
    hours = 12;
  }
  
  if (hours > 12) {
    hours = hours - 12;
  }
  
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  

  today.innerHTML = `${month}월 ${date}일 ${getDayOfWeek(date)}요일`;
  currentTime.innerHTML = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

// 플래시 라이트, 카메라 토글 스위치
const flashLight = document.querySelector(".flash-light");

flashLight.addEventListener("click", function() {
  flashLight.classList.toggle('click');
  const mobileCarrier = document.querySelector(".mobile-carrier");
  const signal = document.querySelector(".signal");
  const wifi = document.querySelector(".wifi");
  const battery = document.querySelector(".battery");
  const islandPopup = document.querySelector(".island-popup");
  const lightBulb = document.querySelector(".fa-lightbulb");
  if (flashLight.classList.contains('click')) {
    mobileCarrier.style.translate = '-5px';
    signal.style.translate = '5px';
    wifi.style.translate = '5px';
    battery.style.translate = '5px';
    islandPopup.style.width = '120px';
    islandPopup.innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
  } else if (!(flashLight.classList.contains('click'))) {
    mobileCarrier.style.translate = '5px';
    signal.style.translate = '-5px';
    wifi.style.translate = '-5px';
    battery.style.translate = '-5px';
    islandPopup.style.width = '90px';
    lightBulb.remove();
  }
})


const camera = document.querySelector(".camera");

camera.addEventListener("click", function() {
  camera.classList.toggle('click');
})