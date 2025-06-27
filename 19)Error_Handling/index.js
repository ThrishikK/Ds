try {
  let x = y + 1; // y is not defined – error
} catch (err) {
  console.log("An error occurred:", err.message);
}

function greet(name) {
  if (!name) {
    throw new Error("Name is required");
  }
  console.log("Hello, " + name);
}

try {
  greet(); // No argument passed
} catch (e) {
  console.log("Caught:", e.message);
}

try {
  let a = 5 / 0;
} catch (e) {
  console.log("Error:", e.message);
} finally {
  console.log("This runs always");
}
