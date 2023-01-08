const time = document.getElementById("time");
const button = document.getElementById("end");
const start = document.getElementById("start");
const memory = document.getElementById("memory_section");
let second = 0;
let minute = 30;
let hour = 0;
let running = true;

let timeId = setInterval(()=>{
  if (running == true){
    second-=1;
  if (second<0){
    second = 60;
    minute -= 1;
  }
  if (minute<0){
    hour-=1;
    minute=60;
  }
  time.textContent = `0${hour}:${minute}:${second}`
  }
},1000)
if ((minute==0&&second==0)||running==false) clearInterval(timeId);
start.onclick = function(){
  running = true;
}

//ktra button
const container = document.getElementById("container");
const test_infor = document.getElementById("test_infor");
const time_display = document.getElementById("time_display");
const check = document.getElementById("check");
const check_percent = document.getElementById("check_percent");
button.onclick = function(){
  running = false;
  console.log(running);
  memory.style.display = "block";
  clearInterval(timeId);
  container.style.display = "none";
  test_infor.style.display = "none";
}

check.onclick = function(){

}

//x cross
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

context.strokeStyle = "gray";
context.lineWidth = 3;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(25,25);
context.moveTo(0,25);
context.lineTo(25,0);
context.stroke();

check.onclick = function(){
  memory.style.display="none";
  check_percent.style.display="block";
}
canvas.onclick = function(){
  container.style.display = "block";
  test_infor.style.display = "block";
  check_percent.style.display = "none";
}

const logo = document.getElementById("logo");
logo.onclick = function(){
  window.location = "index.html";
}

const free_test = document.getElementById("free_test");
free_test.onclick = function(){
  window.location = "Free_test.html";
}