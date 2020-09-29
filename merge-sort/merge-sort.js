// Implement Merge Sort
const merge = require("./merge");

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
}

let res = mergeSort([9, 12, 74, 21, 36, 85, 10]);
console.log(res);
