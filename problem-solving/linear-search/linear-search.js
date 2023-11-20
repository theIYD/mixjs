// Perform Linear Search on a set of elements
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

let index = linearSearch([5, 1, 7, 9, 3, 2], 10);
console.log(index);
