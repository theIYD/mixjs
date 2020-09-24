// Polyfill for Array.filter
Array.prototype.customFilter = function (fn) {
  let context = this,
    result = [];

  for (let i = 0; i < context.length; i++) {
    let shouldInclude = fn.call(context, context[i], i);
    if (shouldInclude) {
      result.push(context[i]);
    }
  }

  return result;
};
