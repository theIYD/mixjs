// Execute promises in parallel. After all promises are resolved, invoke the callback
async function executeParallel(promises, callback) {
  const result = [];
  let tasksFinished = 0;

  promises.forEach((promise, index) => {
    promise.then((val) => {
      result[index] = val;
      tasksFinished++;
    });

    if (tasksFinished >= promises.length) {
      callback(result);
    }
  });
}
