// T = O(2^n), S = O(n)
var nthFibonacci = (n) => {
  if (n === 1) return 0;
  else if (n === 2) return 1;
  else return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};
