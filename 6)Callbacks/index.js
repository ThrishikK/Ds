const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("Thrishik")); // Hello, Thrishik!

const square = (x) => x * x;

function processUserInput(callback) {
  const name = "Thrishik";
  callback(name);
}

processUserInput(function (name) {
  console.log("Hello, " + name);
});

function process(callback) {
  const message = "JS is cool!";
  callback(message);
}

process((msg) => console.log(msg)); // Output: JS is cool!

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

const person = {
  name: "Thrishik",
  sayName: function () {
    setTimeout(() => {
      console.log("My name is " + this.name); // 'this' refers to person
    }, 1000);
  },
};

person.sayName();
