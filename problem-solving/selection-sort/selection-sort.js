// Implement Selection Sort
const swap = require("../utils/swap");

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }

  return arr;
}

let res = selectionSort([9, 12, 74, 21, 36, 85, 10]);
console.log(res);
