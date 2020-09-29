/* Given an array of unsorted numbers, find all unique triplets in it that add up to zero */
// T = O(N^2) | S = O(N)
var searchTriplets = (arr) => {
  arr.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < arr.length; i++) {
    // Skip same element to avoid duplicate triplets
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    // We need to find X + Y + Z = 0 i.e Y + Z = -X
    searchPair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
};

var searchPair = (arr, target, left, triplets) => {
  let right = arr.length - 1;
  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      triplets.push([-target, arr[left], arr[right]]);
      left++;
      right--;

      while (left < right && arr[left] === arr[left - 1]) {
        left++; // skip same element to avoid duplicate triplets
      }

      while (left < right && arr[right] === arr[right + 1]) {
        right--; // skip same element to avoid duplicate triplets
      }
    } else if (currentSum < target) {
      left++; // need a pair with a bigger sum
    } else {
      right--; // need a pair with a smaller sum
    }
  }
};
