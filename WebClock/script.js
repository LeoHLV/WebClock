const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minute");
const secondSpan = document.getElementById("seconds");

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}
function changetime() {
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  //mostrar valores no console da página
  console.log("H:",hour," M:", minutes," S:", seconds);

  hourSpan.textContent = pad2(hour);
  minuteSpan.textContent = pad2(minutes);
  secondSpan.textContent = pad2(seconds);

  //limpar o terminal
  if (seconds === 59) {
    console.clear();
  }
}
setInterval(changetime, 1000);

/*
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let weekday = date.getDay();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

var wkday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
][weekday];

console.log(wkday, day, month, year);
*/
