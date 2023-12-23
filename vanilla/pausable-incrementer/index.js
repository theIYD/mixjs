function timer(init = 0, step = 1) {
  let intervalId = undefined;
  let count = init;

  function startTimer() {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log(count);
        count = count + step;
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    intervalId = undefined;
  }

  return {
    startTimer,
    stopTimer,
  };
}
