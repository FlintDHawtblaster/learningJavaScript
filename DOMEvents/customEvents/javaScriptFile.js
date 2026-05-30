// CUSTOM EVENT DEMO
// function highlight(elem, callback) {
//     elem.style.backgroundColor = 'yellow';

//     if (callback && typeof callback === 'function') {
//         callback(elem);
//     }
// }

// let note = document.querySelector('.note');
// function addBorder(elem) {
//     elem.style.border = "solid 1px red";
// }

// highlight(note, addBorder);


function highlight(elem) {
    const bgColor = 'yellow';
    elem.style.backgroundColor = bgColor;

    // create the event
    let event = new CustomEvent('mark', {
        detail: {
            backgroundColor: bgColor
        }
    });
    // dispatch the event
    elem.dispatchEvent(event);
}

// Select the div element
let div = document.querySelector('.note');

// Add border style
function addBorder(elem) {
    elem.style.border = "solid 1px red";
}

// Listen to the highlight event
div.addEventListener('mark', function (e) {
    addBorder(this);

    // examine the background
    console.log(e.detail);
});

// highlight div element
highlight(div);