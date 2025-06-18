let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}

if ("hello") console.log("This is truthy");
if (0) console.log("This won't run");

let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apples are red");
    break;
  case "banana":
    console.log("Bananas are yellow");
    break;
  case "mango":
    console.log("Mangoes are delicious");
    break;
  default:
    console.log("Unknown fruit");
}
