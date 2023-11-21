// Implementation of promise.all
function all(promises) {
  const _promises = promises.map((item) =>
    item instanceof Promise ? item : Promise.resolve(item),
  );

  // resolve if empty
  if (_promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const resultantArray = [];
    let fulfilledCount = 0;
    let isErrored = false;

    _promises.forEach((promise, index) => {
      promise.then(
        (data) => {
          if (isErrored) return;
          resultantArray[index] = data;

          fulfilledCount += 1;
          if (fulfilledCount === _promises.length) {
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
