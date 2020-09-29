// Implement Array.prototype.flat
function flat(arr, depth = 1) {
  const resultantArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      resultantArray.push(...flat(arr[i], depth - 1));
    } else {
      resultantArray.push(arr[i]);
    }
  }

  return resultantArray;
}
