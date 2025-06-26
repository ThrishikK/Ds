const numbers = new Set([1, 2, 3, 3, 2]);
console.log(numbers); // Set(3) { 1, 2, 3 }

let fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // Duplicate, ignored

console.log(fruits.size); // 2
console.log(fruits.has("banana")); // true

fruits.delete("banana");
console.log(fruits); // Set(1) { "apple" }

for (let item of fruits) {
  console.log(item);
}

const scores = new Map();

scores.set("Anya", 90);
scores.set(101, 85);
scores.set(true, "Passed");

console.log(scores.get("Anya")); // 90
console.log(scores.size); // 3

for (let [key, value] of scores) {
  console.log(key, value);
}

// Object to Map
const obj = { a: 1, b: 2 };
const map = new Map(Object.entries(obj));

// Map to Object
const backToObject = Object.fromEntries(map);
