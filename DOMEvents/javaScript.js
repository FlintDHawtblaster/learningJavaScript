//Method 2
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World 2");

//Method 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World 3");
});

// Method 1 Again
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// Methods 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn4");

// Method 2
//btn.onclick = alertFunction;

// Method 3
btn.addEventListener("click", alertFunction);
