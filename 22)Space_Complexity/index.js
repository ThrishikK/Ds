// ✅ Example 1: Constant Space
function sum(n) {
  let total = 0; // 1 variable
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// ✅ Example 2: Linear Space
function createArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}
// 🔁 3. Space from Recursion (Call Stack)
function countdown(n) {
  if (n === 0) return;
  countdown(n - 1);
}
