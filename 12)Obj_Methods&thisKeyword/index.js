let user = {
  name: "Thrishik",
  greet: function () {
    console.log("Hello!");
  },
};

user.greet(); // Output: Hello!

let person = {
  name: "Thrishik",
  introduce() {
    console.log("My name is " + this.name);
  },
};

person.introduce(); // Output: My name is Thrishik

user = {
  name: "Thrishik",
  sayHi: () => {
    console.log("Hi " + this.name);
  },
};

user.sayHi(); // Hi undefined

let team = {
  name: "Warriors",
  showName() {
    console.log(this.name);
  },
  coach: {
    name: "Steve",
    intro() {
      console.log(this.name);
    },
  },
};

team.showName(); // "Warriors"
team.coach.intro(); // "Steve"
