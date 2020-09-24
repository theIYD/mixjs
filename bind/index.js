// Polyfill for Function.bind
Function.prototype.customBind = function (...args) {
  let context = this,
    params = args.slice(1);
  return function (...args2) {
    context.apply(args[0], params.concat(args2));
  };
};
