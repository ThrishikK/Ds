let person = {
  name: "Thrishik",
  age: 25,
  isStudent: true,
};

console.log(person.name); // "Thrishik"
console.log(person["age"]); // 25
let key = "isStudent";
console.log(person[key]); // true
person.age = 26;
person["name"] = "Kiran";
person.country = "India";
delete person.isStudent;

for (let key in person) {
  console.log(key, person[key]);
}

console.log("age" in person); // true
console.log(person.hasOwnProperty("name")); // true

let user = {
  id: 101,
  profile: {
    username: "thrishik",
    email: "abc@example.com",
  },
};

console.log(user.profile.username); // "thrishik"
