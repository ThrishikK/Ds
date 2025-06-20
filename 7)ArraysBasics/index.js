let fruits = ["apple", "banana", "mango"];
let numbers = [10, 20, 30]; // Array of numbers
let mixed = [1, "hello", true, null]; // Array of mixed types
let empty = []; // Empty array
let colors = ["red", "green", "blue"];

console.log(colors[0]); // red
console.log(colors[2]); // blue

colors[1] = "yellow";
console.log(colors); // ["red", "yellow", "blue"]
colors.push("purple");
colors.pop(); // removes "purple"
colors.unshift("orange");
colors.shift(); // removes "orange"
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
for (let color of colors) {
  console.log(color);
}
colors.forEach((color, index) => {
  console.log(index + ": " + color);
});
let arr = [];
arr[5] = "Hi";
console.log(arr); // [empty × 5, 'Hi']
console.log(arr.length); // 6
