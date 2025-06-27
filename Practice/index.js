try {
  let x = y + 1; // y is not defined – error
} catch (err) {
  console.log("An error occurred:", err.name, " => ", err.message);
}

console.log("ha".repeat(18));
