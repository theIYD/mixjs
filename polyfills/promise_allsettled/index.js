// Implementation of Promise.allSettled
function allSettled(promises) {
  const mapped = promises.map((promise) => {
    return Promise.resolve(promise).then(
      (val) => ({ status: "fulfilled", value: val }),
      (err) => ({ status: "rejected", reason: err }),
    );
  });

  return Promise.all(mapped);
}
