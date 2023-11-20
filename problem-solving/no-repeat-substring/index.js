var noRepeatSubstring = (str) => {
  let windowStart = 0;
  let charMap = {};
  let maxLength = -Infinity;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = arr[windowEnd];

    // If the map already contains the char, shrink the window from
    // the beginning so that we have only one occurrence of char
    if (char in charMap) {
      // this is tricky: in the current window, we will not have any char after it's previous index
      // and if `windowStart` is already ahead of the last index of char, we will keep `windowStart`
      windowStart = Math.max(windowStart, charMap[char] + 1);
    }

    // store char in map with value as it's index
    charMap[char] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength === -Infinity ? 0 : maxLength;
};
