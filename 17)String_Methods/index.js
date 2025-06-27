let sentence = "JavaScript is fun";
let words = sentence.split(" ");
console.log(words); // ["JavaScript", "is", "fun"]

let chars = "HELLO".split("");
console.log(chars); // ["H", "E", "L", "L", "O"]

let letters = ["H", "e", "l", "l", "o"];
let word = letters.join("");
console.log(word); // "Hello"

let date = ["2025", "06", "17"].join("-");
console.log(date); // "2025-06-17"

let laugh = "ha".repeat(3);
console.log(laugh); // "hahaha"

let messy = "   Hello!   ";
console.log(messy.trimStart()); // "Hello!   "
console.log(messy.trimEnd()); // "   Hello!"

function maskCard(cardNumber) {
  let last4 = cardNumber.slice(-4);
  return "*".repeat(cardNumber.length - 4) + last4;
}

console.log(maskCard("1234567812345678")); // ************5678
