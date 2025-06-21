let fruits = ["apple", "banana"];
fruits.push("mango");

console.log(fruits); // ["apple", "banana", "mango"]

let newLength = fruits.push("grape");
console.log(newLength); // 4

let last = fruits.pop();

console.log(last); // "grape"
console.log(fruits); // ["apple", "banana", "mango"]

let first = fruits.shift();

console.log(first); // "apple"
console.log(fruits); // ["banana", "mango"]

fruits.unshift("kiwi");

console.log(fruits); // ["kiwi", "banana", "mango"]

let len = fruits.unshift("pineapple");
console.log(len); // 4
