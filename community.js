const ques = document.getElementById("ques");
let text = "";

window.addEventListener("keydown",take_value);

function take_value(event){
  if (event.key==="Enter"){
    text = ques.value;
    document.getElementById("question").textContent = text;
    document.getElementById("question").style.opacity = 1;
  }
}

