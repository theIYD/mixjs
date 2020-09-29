/* Given an array of unsorted numbers and a target sum, count all triplets in it such that
arr[i] + arr[j] + arr[k] < target where i, j and k are three different indices. Write a
function to return the count of such triplets */
// T = O(N^2) | S = O(N)
var tripletWithSmallerSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    count += searchPair(arr, target - arr[i], i);
  }

  return count;
};

var searchPair = (arr, targetSum, first) => {
  let count = 0;
  let left = first + 1;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] < targetSum) {
      // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      count += right - left;
      left++;
    } else {
      right--; // need a pair with smaller sum
    }
  }

  return count;
};
