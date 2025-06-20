// RUN AND OBSERVE
function A(callback) {
  console.log(callback);
  const callbackResult = callback();
  console.log(callbackResult);
  console.log("In A");
}

function B() {
  console.log("In B");
  let b = {
    b: 2,
  };
  return b;
}

A(B);

A(B());
