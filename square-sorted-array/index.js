/* Given a sorted array, create a new array containing sqaures of all number of the input array in the sorted order */
// T = O(n) | S = O(N)
var squareSortedArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let result = Array(arr.length).fill(0);
  let highestSquareIndex = arr.length - 1;

  while (start <= end) {
    let squaredStart = Math.pow(arr[start], 2);
    let squaredEnd = Math.pow(arr[end], 2);

    if (squaredStart < squaredEnd) {
      result[highestSquareIndex] = squaredEnd;
      end--;
    } else {
      result[highestSquareIndex] = squaredStart;
      start++;
    }

    highestSquareIndex--;
  }

  return result;
};
