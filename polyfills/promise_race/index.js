// Implementation of Promise.race -> resolve/reject as soon as any input resolves/rejects
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve, reject).catch(reject);
    });
  });
}
