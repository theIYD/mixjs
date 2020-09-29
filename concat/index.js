Array.prototype.concat = function customConcat(...args) {
  const resultant = [...this];
  const flatten = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      } else {
        resultant.push(arr[i]);
      }
    }
    return;
  };
  flatten(args);
  return resultant;
};

const arr = [1, 2];
console.log(arrc.concat([4, 5]));
