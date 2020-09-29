// Implement Insertion sort
function insertionSort(arr) {
  let currentVal, j;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];

    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

let res = insertionSort([9, 12, 74, 21, 36, 85, 10]);
console.log(res);
