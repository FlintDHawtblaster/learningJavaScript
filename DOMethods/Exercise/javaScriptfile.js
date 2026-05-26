const mainBody = document.querySelector("body");
const redPara = document.createElement("p");
const blueHead = document.createElement("h3");
const oneDiv = document.createElement("div");
const anotherHead = document.createElement("h1");
const anotherPara = document.createElement("p");

redPara.style.color = "red";
blueHead.style.color = "blue";
oneDiv.setAttribute("style", "border: 2px solid black; backgroundColor: pink");

redPara.textContent = "Hey, I'm red!";
blueHead.textContent = "I'm a blue h3";
anotherHead.textContent = "I'm in a div";
anotherPara.textContent = "ME TOO";

mainBody.appendChild(redPara);
mainBody.appendChild(blueHead);
oneDiv.appendChild(anotherHead);
oneDiv.appendChild(anotherPara);
mainBody.appendChild(oneDiv);