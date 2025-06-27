let name = "Thrishik";
let age = 25;

let msg = `My name is ${name} and I am ${age} years old.`;

console.log(msg);
// Output: My name is Thrishik and I am 25 years old.

let quote = `
This is a
multi-line
string.`;

console.log(quote);

let a = 5;
let b = 10;

console.log(`Sum is ${a + b}`); // Sum is 15

function tag(strings, ...values) {
  console.log(strings); // Array of literal strings
  console.log(values); // Values inside ${}
}

name = "Anya";
age = 20;
tag`Name: ${name}, Age: ${age}`;
