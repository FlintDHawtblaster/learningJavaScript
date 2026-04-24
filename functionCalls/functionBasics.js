function add7(num) {
    return num + 7;
} 

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(word) {
    totalWord = "";
    for (i = 0; i < word.length; i++) {
        if (i === 0) {
            totalWord += word.charAt(i).toUpperCase()
        } else {
            totalWord += word.charAt(i).toLowerCase()
        }
    }

    return totalWord;
}

function lastLetter(word) {
    return word[word.length - 1];
}

console.log(add7(10));
console.log(multiply(3, 2));
console.log(capitalize("ABCD"));
console.log(capitalize("abcd"));
console.log(capitalize("aBcD"));
console.log(lastLetter("abcd"));