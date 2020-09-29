/* Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after the remove the duplicates in-place return the new length of the array */
// T = O(N) | S = O(1)
var removeDuplicates = (arr) => {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  let i = 1;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate++;
    }

    i++;
  }

  return nextNonDuplicate;
};

/* Given an unsorted array of numbers and a target `KEY`, remove all instances of kry in-place and return the new length of the array*/
// T = O(N) | S = O(1)
var removeElement = (arr, key) => {
  let nextElement = 1; // index of the next element which is not `KEY`
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement++;
    }
  }

  return nextElement;
};
