// Composition - create a pipe()
function pipe(funcs) {
  // funcs: array of functions
  return function (val) {
    while (funcs.length > 0) {
      let f = func.shift();
      val = f(val);
    }
    return val;
  };
}

// Using reduce

const upperCase = (str) => {
  return str.toUpperCase();
};
const reverse = (str) => {
  return str.split("").reverse().join("");
};
const append = (str) => {
  return "Hello " + str;
};
// array of functions to be piped
const arr = [upperCase, reverse, append];

const result = arr.reduce((prev, current) => {
  const newResult = current(prev);
  return newResult;
}, "abc");

console.log("result", result);
