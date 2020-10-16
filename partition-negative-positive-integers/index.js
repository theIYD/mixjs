// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.
// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

function shiftIntegers(arr, left, right) {
  while (left < right) {
    if (arr[left] < 0 && arr[right] < 0) {
      // left and right are negative
      left++;
    } else if (arr[left] > 0 && arr[right] < 0) {
      // left is positive and right is negative
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    } else if (arr[left] > 0 && arr[right] > 0) {
      // left and right are positive
      right--;
    } else {
      left++;
      right--;
    }
  }
}
