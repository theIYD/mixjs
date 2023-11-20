/* Given an array of positive numbers and a positive number S, find the 
length of the smallest contigous subarray whose sum is greater than or equal
to S. Return 0, if no such subarray exists */
// T = O(N) | S = O(1)
var smallestSubarrayWithSum = (arr, S) => {
  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= S) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (minLength === Infinity) return 0;
  return minLength;
};
