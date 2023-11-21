// Implementation of Array.prototype.reduce
Array.prototype.reduce = function customReduce(reducer, initial) {
  let acc = initial,
    i = 0;

  if (typeof initial === "undefined") {
    // Check if arr is empty
    if (this.length === 0) {
      throw new TypeError("empty array with initial value");
    }

    [acc] = this;
    i = 1;
  }

  while (i < this.length) {
    acc = reducer(acc, this[i], i, this);
    i++;
  }

  return acc;
};
