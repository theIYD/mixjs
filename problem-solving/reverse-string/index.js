/*
	Write a function that reverses a string
	Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
	Example: hello -> olleh
 */
const reverseString = (s) => {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    let tmp = s[left];
    s[left++] = s[right];
    s[right--] = tmp;
  }
};
