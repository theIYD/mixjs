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
