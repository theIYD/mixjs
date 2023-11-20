const maxSubArraySum = (arr, k) => {
  let currentSum = 0,
    maxSum = 0,
    maxSumStart = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      currentSum += arr[i];
      maxSum = currentSum;
    } else {
      currentSum -= arr[i - k];

      if (currentSum > maxSum) {
        maxSum = currentSum;
        maxSumStart = i - k + 1;
      }
    }
  }

  return arr.slice(maxSumStart, maxSumStart + k);
};

console.log(maxSubArraySum([-1, 2, 3, 0, -3, 9], 2));
