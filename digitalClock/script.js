let  dateHeading = document.querySelector("#date");
let timeHeading = document.querySelector("#time");
function updateTime(){
  let date = new Date()
  let todayDate = date.toLocaleDateString()
  let time = date.toLocaleTimeString()
  dateHeading.innerText = todayDate;
  timeHeading.innerText = time;
}
setInterval(updateTime,1000)