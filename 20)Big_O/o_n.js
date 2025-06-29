function printItems(arr) {
  for (let item of arr) {
    console.log(item);
  }
}

function findItem(arr, target) {
  for (let item of arr) {
    if (item === target) {
      return true;
    }
  }
  return false;
}

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
