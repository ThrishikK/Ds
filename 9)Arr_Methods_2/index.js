let colors = ["red", "green", "blue", "yellow"];
let newColors = colors.slice(1, 3);

console.log(newColors); // ["green", "blue"]
console.log(colors); // Original array is unchanged

let copy = colors.slice(); // copy entire array

let fruits = ["apple", "banana", "mango"];
let removed = fruits.splice(1, 1);

console.log(removed); // ["banana"]
console.log(fruits); // ["apple", "mango"]

fruits.splice(1, 0, "orange");
console.log(fruits); // ["apple", "orange", "mango"]

fruits.splice(1, 1, "grape");
console.log(fruits); // ["apple", "grape", "mango"]

let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
