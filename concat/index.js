Array.prototype.concat = function customConcat(...args) {
  const flatten = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      } else {
        this.push(arr[i]);
      }
    }
    return;
  };
  flatten(args);
  return this;
};
