function getData() {
  // Do something
}

// Throttle method
function throttle(fn, limit) {
  let flag;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(function () {
        flag = true;
      }, limit);
    }
  };
}

function throttle2(func, limit) {
  let timer;
  let lastRan;

  return function () {
    let context = this,
      args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(timer);

      timer = setTimeout(
        function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, arguments);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}

// Pass this to event listener
let betterFunc = throttle(getData, 300);
