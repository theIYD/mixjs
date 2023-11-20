/* Write a method to determine if the array has a cycle */
// T = O(N^2) | S = O(1)
var cycleInCircularArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isForward = arr[i] >= 0; // if we are moving forward or not
    let slow = i;
    let fast = i;

    // if slow or becomes -1, this means we can't find cycle for this number
    while (true) {
      // move one step for slow
      slow = findNextIndex(arr, isForward, slow);

      // move one step for fast
      fast = findNextIndex(arr, isForward, fast);

      if (fast !== -1) {
        // move another step for fast
        fast = findNextIndex(arr, isForward, fast);
      }

      if (slow === -1 || fast === -1 || slow === fast) break;
    }

    if (slow !== -1 && slow !== fast) return true;
  }

  return false;
};

var findNextIndex = (arr, isForward, currentIndex) => {
  let direction = arr[currentIndex] >= 0;

  if (isForward !== direction) return -1; // change in direction, return -1

  let nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
  if (nextIndex < 0) nextIndex += arr.length; // wrap around for negative numbers

  // one element cycle, return -1
  if (nextIndex === currentIndex) nextIndex = -1;
  return nextIndex;
};
