const desiredSubArraySum = (arr, target) => {
  let currentSum = 0,
    j = 0,
    result = [];

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    while (currentSum > target) {
      currentSum -= arr[j];
      j++;
    }

    if (currentSum === target) {
      let resultArr = arr.filter((_, index) => index >= j && index <= i);
      result.push(resultArr);
    }
  }

  return result;
};

console.log(desiredSubArraySum([23, 1, 6, 9, 15, 8], 24));
