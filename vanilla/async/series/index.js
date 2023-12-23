// Approach 1: async await
const asyncSeries = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log("result", result);
    } catch (err) {
      console.error(err);
    }
  }
};

// Approach 2: Reduce
const asyncSeriesReduce = async function (promises) {
  promises.reduce((acc, curr) => {
    return acc.then(() => {
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
};
