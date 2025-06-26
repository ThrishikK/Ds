let user = {
  name: "Thrishik",
  age: 25,
  city: "Hyderabad",
};

let { name, age } = user;

console.log(name); // "Thrishik"
console.log(age); // 25

let { name: userName, city: location } = user;

console.log(userName); // "Thrishik"
console.log(location); // "Hyderabad"

let { gender = "not specified" } = user;

console.log(gender); // "not specified"

let person = {
  info: {
    firstName: "Anya",
    lastName: "K",
  },
};

let {
  info: { firstName, lastName },
} = person;

console.log(firstName); // "Anya"

let title = "Atomic Habits";
let author = "James Clear";

// Instead of:
let book = {
  title: title,
  author: author,
};

// Use shorthand:
let book2 = {
  title,
  author,
};
console.log(book2);
