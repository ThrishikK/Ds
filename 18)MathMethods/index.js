let a = 10;
let b = 4.5;

console.log(typeof a); // "number"

let x = 5;
x += 3; // x = 8
x *= 2; // x = 16

Math.round(4.6); // 5
Math.floor(4.9); // 4
Math.ceil(4.1); // 5
Math.trunc(4.9); // 4 (removes decimal)
Math.abs(-10); // 10
Math.max(1, 4, 2); // 4
Math.min(1, 4, 2); // 1
Math.sqrt(16); // 4
Math.pow(2, 3); // 8 (2^3)
Math.random(); // 0 <= random < 1

// Random integer between 1 and 10
let randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);
