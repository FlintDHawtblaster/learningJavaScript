let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

let fizzBuzz = [];

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz.push("FizzBuzz");
  } else if (i % 3 === 0) {
    fizzBuzz.push("Fizz");
  } else if (i % 5 === 0) {
    fizzBuzz.push("Buzz");
  } else {
    fizzBuzz.push(i);
  }
}

document.getElementById("fz").innerHTML = fizzBuzz.join("<br>");