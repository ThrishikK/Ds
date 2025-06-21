let numbers = [1, 2, 3, 4];
let doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]

numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter((num) => num % 2 === 0);

console.log(evens); // [2, 4, 6]

numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

let max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);
console.log(max); // 5
