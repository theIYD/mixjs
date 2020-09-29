// Not clean code
var findThreeLargest = (array) => {
  let result = [null, null, null];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if (!result[2]) {
      result[2] = num;
    } else if (num < result[2]) {
      if (!result[1]) {
        result[1] = num;
      } else if (num < result[1]) {
        if (!result[0] || num > result[0]) {
          result[0] = num;
        }
      }
    } else {
      result[0] = result[1];
      result[1] = result[2];
      result[2] = num;
    }
  }

  return result;
};

// T = O(n), S = O(1)
var findThreeLargestNumbers = (array) => {
  let result = [null, null, null];
  for (let i = 0; i < array.length; i++) {
    updateLargest(result, array[i]);
  }
};

var updateLargest = (result, num) => {
  if (!result[2] || num > result[2]) {
    shiftAndUpdate(result, num, 2);
  } else if (!result[1] || num > result[1]) {
    shiftAndUpdate(result, num, 1);
  } else if (!result[0] || num > result[1]) {
    shiftAndUpdate(result, num, 0);
  }
};

var shiftAndUpdate = (arr, num, index) => {
  for (let x = 0; x < index + 1; x++) {
    if (x === index) {
      array[x] = num;
    } else {
      array[x] = array[x + 1];
    }
  }
};
