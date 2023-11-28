// Implementation of promise.all
function all(promises) {
  // resolve if empty
  if (promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const resultantArray = [];
    let fulfilledCount = 0;
    let isErrored = false;

    promises.forEach((promise, index) => {
      promise.then(
        (data) => {
          if (isErrored) return;
          resultantArray[index] = data;

          fulfilledCount += 1;
          if (fulfilledCount === promises.length) {
            resolve(resultantArray);
          }
        },
        (error) => {
          if (isErrored) return;
          isErrored = true;
          reject(error);
        },
      );
    });
  });
}
