// T = O(N) | S = O(depth)
var productSum = (arr, depth) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += productSum(arr[i], depth + 1);
    } else {
      sum += arr[i];
    }
  }

  return sum * depth;
};
