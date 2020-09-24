function getData() {
  // Fetch API
}

function debounce(fn, limit) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    setTimeout(function () {
      fn.apply(context, args);
    }, limit);
  };
}

// Pass this to event listener
let betterFunc = debounce(getData, 300);
