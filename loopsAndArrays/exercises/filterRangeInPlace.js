function filterRangeInPlace(anArray, a, b) {
     for (let i = 0; i < anArray.length; i++) {

        let val = anArray[i]
         if (val < a || val > b) {
             anArray.splice(i, 1);
             i--;
         }
     }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]
console.log(arr.length)