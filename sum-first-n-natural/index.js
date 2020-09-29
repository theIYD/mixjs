// Find sum of first N natural numbers using Recursion
let sum = 0;

const sumOfFirstN = (n) => {
  if (n < 0) return;
  sum += n;
  return sumOfFirstN(n - 1);
};
