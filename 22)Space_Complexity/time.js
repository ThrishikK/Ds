// function accessFirstElement(arr) {
//   console.time("O(1)");
//   let first = arr[0]; // O(1)
//   console.timeEnd("O(1)");
// }
// accessFirstElement(largeArray);

// function sumArray(arr) {
//   console.time("O(n)");
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i]; // O(n)
//   }
//   console.timeEnd("O(n)");
// }

// const largeArray = Array(1_000_000).fill(1);
// sumArray(largeArray);

function printAllPairs(arr) {
  console.time("O(n²)");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let pair = [arr[i], arr[j]]; // O(n²)
    }
  }
  console.timeEnd("O(n²)");
}

const smallArray = Array(1000).fill(1); // Use smaller size to avoid long delay
printAllPairs(smallArray);
