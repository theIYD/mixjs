// You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing in the list. Find the missing integer.
function findMissingNumber(arr, count) {
  let expectedSum = count * ((count + 1) / 2);
  let actualSum = 0;

  for (let i = 0; i < count; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}
