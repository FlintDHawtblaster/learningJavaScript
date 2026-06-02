const element = document.querySelector("#myID");

element.addEventListener('click', (event) => {
  console.log(event.type);
  // `event` is passed into the callback from the `.addEventListener` function when it receives a 'click' event.
});