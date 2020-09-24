// Polyfill for map
Array.prototype.customMap = function (fn) {
  let result = [],
    context = this;
  for (let i = 0; i < context.length; i++) {
    result.push(fn.call(context, context[i], i));
  }

  return result;
};
