/* Given an array containing 0s, 1s and 2s, sort the array in-place.
You should treat numbers of the array as objects, hence, we can't count 0s, 1s and 2s to recreate the array */
// T = O(N) | S = O(1)
var dutchFlag = (arr) => {
  // low and high pointers
  // if element is 0, move before low
  // if element is 2, move after high
  // if element is 1, it will be between low and high
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
      // swap with low
      [arr[i], arr[low]] = [arr[low], arr[i]];
      i++;
      low++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      // element is 2
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    }
  }
};
