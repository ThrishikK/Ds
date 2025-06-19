function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Thrishik"); // Output: Hello, Thrishik!

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8

const square = function (n) {
  return n * n;
};

console.log(square(4)); // 16

const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

const double = (n) => n * 2;

let globalVar = "I'm global";

function printGlobal() {
  console.log(globalVar); // Accessible
}

function demo() {
  let localVar = "I'm local";
  console.log(localVar);
}

console.log(localVar); // ❌ Error: not defined

if (true) {
  let blockVar = "Block scope";
  const blockConst = "Also block scoped";
}

console.log(blockVar); // ❌ Error
