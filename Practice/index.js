let list = [];
for (let index = 1; index < 101; index++) {
  list.push(index);
}

console.log(list);
list[50] = 2;

function hasDuplicates(arr) {
  let returnObj = {
    count: 0,
    resultBoolean: false,
  };
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      returnObj.count++;
      if (arr[i] === arr[j]) {
        returnObj.resultBoolean = true;
        return returnObj;
      }
    }
  }
  return returnObj;
}

let result = hasDuplicates(list);
console.log(result);
