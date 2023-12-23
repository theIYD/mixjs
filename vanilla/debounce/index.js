function getData() {
  // Fetch API
}

// Debounce method
function debounce(fn, limit, immediate = false) {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    const doNow = immediate && !timer;

    clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;

      if (!immediate) {
        fn.apply(context, args);
      }
    }, limit);

    if (doNow) fn.apply(context, args);
  };
}

// Pass this to event listener
let betterFunc = debounce(getData, 300);
