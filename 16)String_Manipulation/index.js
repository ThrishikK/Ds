let str1 = "Hello";
let str2 = "World";
let str3 = `Hello, ${str2}`; // Template literal

console.log(str3); // Hello, World

let first = "Hello";
let second = "World";

let result1 = first + " " + second;
let result2 = `${first} ${second}`; // Template literal

console.log(result2); // Hello World

let word = "JavaScript";
console.log(word.slice(0, 4)); // "Java"

console.log(word.substring(4, 10)); // "Script"

let msg = "hello world";
console.log(msg.replace("world", "JS")); // hello JS

let text = "apple, banana, apple";
console.log(text.replaceAll("apple", "mango")); // mango, banana, mango
