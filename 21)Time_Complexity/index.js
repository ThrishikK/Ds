function printFirstItem(arr) {
  console.log(arr[0]); // O(1)
}

function printAllItems(arr) {
  for (let item of arr) {
    console.log(item); // O(n)
  }
}

function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

function example(arr) {
  console.log(arr[0]); // O(1)
  for (let item of arr) {
    // O(n)
    console.log(item);
  }
}

function nested(arr) {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = 0; j < arr.length; j++) {
      // O(n)
      console.log(i, j);
    }
  }
}

function mixed(arr) {
  console.log(arr[0]); // O(1)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // O(n)
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j); // O(n²)
    }
  }
}

// O(1 + n + n²) → Drop lower orders → ✅ O(n²)
