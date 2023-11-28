// Implementation of Promise.finally
Promise.prototype.finally = function (callback) {
  if (typeof callback !== "function") {
    // it's a promise
    return this.then(callback, callback);
  }

  const current = this.constructor || Promise;

  return this.then(
    (value) => current.resolve(callback()).then(() => value),
    (err) =>
      current.resolve(callback()).then(() => {
        throw err;
      }),
  );
};
