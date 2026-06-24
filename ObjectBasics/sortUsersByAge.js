//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// Long function and time to run
// function sortByAge(anArray) {
//     let n = anArray.length;
    
//     // Outer loop: Controls how many passes we make through the array
//     for (let i = 0; i < n; i++) {
        
//         // Inner loop: Performs the adjacent comparisons
//         // (n - i - 1) stops us from checking already-sorted elements at the end
//         for (let j = 0; j < n - i - 1; j++) {
            
//             // If the current element is bigger than the next element...
//             if (anArray[j]["age"] > anArray[j + 1]["age"]) {
//                 // Swap them!
//                 let temp = anArray[j];
//                 anArray[j] = anArray[j + 1];
//                 anArray[j + 1] = temp;
//             }
//         }
//     }
// }

//Alternative solution
function sortByAge(anArray) {
  anArray.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete