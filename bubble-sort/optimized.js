// Optimized version of Bubble Sort
const swap = require("../utils/swap");

function bubbleSort(arr) {
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

let res = bubbleSort([9, 12, 74, 21, 36, 85, 10]);
console.log(res);
