Array.prototype.chop = function (size) {
  const temp = [...this];

  if (!size) return temp;

  const output = [];
  let i = 0;

  while (i < temp.length) {
    output.push(temp.slice(i, i + size));
    i = i + size;
  }

  return output;
};

function mapLimit(input, limit, callback) {
  //uses combination of Async.series and Async.parallel
  return new Promise((resolve, reject) => {
    let chopped = input.chop();

    // for all subarrays of chopped, run in series
    const final = chopped.reduce((acc, curr) => {
      return acc.then((val) => {
        return new Promise((resolve, reject) => {
          const results = [];
          let done = 0;

          curr.forEach((e) => {
            callback(e, (error, value) => {
              if (error) reject(error);
              else results.push(value);
              done++;

              if (done >= curr.length) {
                resolve([...val, ...results]);
              }
            });
          });
        });
      });
    }, Promise.resolve([]));

    final
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
