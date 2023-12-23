function mapSeries(inputArray, callback) {
  return new Promise((resolve, reject) => {
    const final = inputArray.reduce((acc, current) => {
      return acc.then((val) => {
        // return a new promise
        return new Promise((resolve, reject) => {
          callback(current, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve([...val, result]);
            }
          });
        });
      });
    }, Promise.resolve([]));

    final
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
  // i am async iteratee function
  // do async operations here
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    // throw error
    if (num === 12) {
      callback(true);
    } else {
      callback(null, num);
    }
  }, 1000);
});
numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));
