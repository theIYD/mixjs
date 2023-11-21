// Implement Promise.any()
function any(promises) {
  return new Promise((resolve, reject) => {
    let isDone = false;
    let errors = [];

    promises.forEach((prom, index) => {
      prom.then(
        (data) => {
          if (!isDone) {
            resolve(data);
            isDone = true;
          }
        },
        (err) => {
          errors[index] = err;

          if (errors.length === promises.length) {
            reject(new Error("none resolved"));
          }
        },
      );
    });
  });
}
