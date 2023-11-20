/* Given a string, find the length of the longest substring in it with no more than K distinct characters */
// T = O(N) | S = O(k)
var longestSubStringWithKDistinctChar = (arr, k) => {
  let charFrequency = {};
  let windowStart = 0;
  let maxLength = -Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let char = arr[windowEnd];
    if (!(char in charFrequency)) {
      charFrequency[char] = 0;
    }

    charFrequency[char] += 1;

    while (Object.keys(charFrequency).length > k) {
      let char = arr[windowStart];
      charFrequency[char]--;

      if (charFrequency[char] === 0) {
        delete charFrequency[char];
      }

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength === -Infinity ? 0 : maxLength;
};
