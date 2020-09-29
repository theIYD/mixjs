// Polyfill for Array.prototype.every
Array.prototype.every = function customEvery(cb, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (!cb.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
};
