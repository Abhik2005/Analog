var secondStick = document.querySelector(".second-stick");
var minuteStick = document.querySelector(".minute-stick");
var hourStick = document.querySelector(".hour-stick");
var s = 0;
var m = 0;
var h = 300;
setInterval(function(){
  s = s + 6;
  secondStick.style.transform = `translate(-50%, -50%) rotate( ${s}deg)`;
},1000);
setInterval(function () {
  m = m + 6;
  minuteStick.style.transform = `translate(-50%, -50%) rotate( ${m}deg)`;
}, 60000);
setInterval(function () {
  h = h + 30;
  hourStick.style.transform = `translate(-50%, -50%) rotate( ${h}deg)`;
}, 3600000);