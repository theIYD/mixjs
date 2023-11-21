function series(promises) {
  promises.reduce((prev, curr) => {
    // return when prev promise is resolved
    return prev.then(() => {
      // run current promise
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
}

const asyncTask = function (time) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time);
  });
};
// create an array of task
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

series(promises);
