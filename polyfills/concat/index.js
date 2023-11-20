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
  };
  flatten(args);
  return resultant;
};
