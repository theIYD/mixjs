function sampler(fn, count) {
  let c = 0;
  return function () {
    let args = arguments,
      context = this;
    if (c === count) {
      fn.apply(context, args);
      c = 0;
      return;
    }
    c++;
  };
}
