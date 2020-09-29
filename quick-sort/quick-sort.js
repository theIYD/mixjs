// Implement Quick Sort
const pivot = require("./pivot");
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

let res = quickSort([9, 12, 74, 21, 36, 85, 10]);
console.log(res);
