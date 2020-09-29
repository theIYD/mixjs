const kadanesAlgo = (arr) => {
  let maxCurrent = (maxGlobal = arr[0]);

  for (let i = 1; i <= arr.length - 1; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
};

console.log(kadanesAlgo([-2, 3, 2, -1]));
