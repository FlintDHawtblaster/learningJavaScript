function copySorted(anArray) {
    let anotherArray = [];

    for (let i = 0; i < anArray.length; i++) {
        anotherArray[i] = anArray[i];
    }
    
    return anotherArray.sort();
}

//Alternative Solution
function copySorted1(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
let sorted1 = copySorted1(arr);

console.log( sorted )
console.log( sorted1 ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)