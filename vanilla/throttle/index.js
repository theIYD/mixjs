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

// Pass this to event listener
let betterFunc = throttle(getData, 300);
