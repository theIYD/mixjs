/* Given an array, find the average of all contigous subarrays of size K in it */
// T = O(N) | S = O(N)
var averageOfSubarrays = (arr, k) => {
  const result = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we have not hit the required window size of k
    if (windowEnd >= k - 1) {
      result.push(windowSum / k); // calculate the average
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
};
