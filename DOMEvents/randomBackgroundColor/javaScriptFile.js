const btn = document.querySelector("#first");
const btn1 = document.querySelector("#second");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// Uses event listener
//Change "click" to "focus", "blur", "dblclick", "mouseover" and "mouseout" to experiment
btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//Uses event handler properties
function bgChange() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn1.onclick = bgChange;
