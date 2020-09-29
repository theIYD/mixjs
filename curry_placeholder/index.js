function curryPlaceholder(func) {
  return function curried(...args) {
    const funcArgsLength = func.length;
    const argsEnough =
      args.length >= funcArgsLength &&
      args
        .slice(0, funcArgsLength)
        .every((arg) => arg !== curryPlaceholder.placeholder);

    if (argsEnough) {
      return func.apply(this, args);
    } else {
      return function (...newArgs) {
        // merge newArgs and args
        const resultantArgs = [];
        let i = 0,
          j = 0;

        while (i < args.length && j < newArgs.length) {
          if (args[i] === curryPlaceholder.placeholder) {
            resultantArgs.push(newArgs[j]);
            i++;
            j++;
          } else {
            resultantArgs.push(args[i]);
            i++;
          }
        }

        while (i < args.length) {
          resultantArgs.push(args[i]);
          i++;
        }

        while (j < newArgs.length) {
          resultantArgs.push(newArgs[j]);
          j++;
        }

        return curried(...resultantArgs);
      };
    }
  };
}

curryPlaceholder.placeholder = Symbol();
