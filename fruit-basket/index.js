var fruitBasket = (arr) => {
  let fruitFrequency = {};
  let windowStart = 0;
  let maxLength = -Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    let fruit = arr[windowEnd];
    if (!(fruit in fruitFrequency)) {
      fruitFrequency[fruit] = 0;
    }

    fruitFrequency[fruit] += 1;

    // shrink the sliding window, until we are left with 2 fruits in the fruit frequency object
    while (Object.keys(fruitFrequency).length > 2) {
      let fruit = arr[windowStart];
      fruitFrequency[fruit]--;

      if (fruitFrequency[fruit] === 0) {
        delete fruitFrequency[fruit];
      }

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength === -Infinity ? 0 : maxLength;
};
