function closureSum(accumulator) {
  let a = accumulator;

  function sum(current) {
    a = a + current;
    return a;
  }

  return sum;
}

let sum = closureSum(10);
console.log(sum(2)); // 12
console.log(sum(3)); // 15 .. so on
