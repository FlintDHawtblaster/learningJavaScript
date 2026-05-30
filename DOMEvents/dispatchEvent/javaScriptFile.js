let btn = document.querySelector('.btn');

 btn.addEventListener('click', (event) => {
        alert('Mouse Clicked');
        console.log(event.isTrusted);
 });

// let clickEvent = new Event('click');
// btn.dispatchEvent(clickEvent);

let clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 150,
    clientY: 150
});
btn.dispatchEvent(clickEvent);

console.log(clickEvent.isTrusted);
