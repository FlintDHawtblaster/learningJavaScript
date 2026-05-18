function unique(anArray) {
  /* your code */
  let newArray = [];

  for (let i = 0; i < anArray.length; i++) {
    if (!newArray.includes(anArray[i])) {
        newArray.push(anArray[i]);
    }
  }

  return newArray;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O