function memoize(fn) {
  const cache = {};

  return function () {
    let context = this,
      args = JSON.stringify(arguments);

    if (cache[args]) {
      return cache[args];
    }

    let result = fn.apply(context, ...arguments);
    cache[args] = result;
    return result;
  };
}
