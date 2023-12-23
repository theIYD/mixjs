function filter(input, callback) {
  return new Promise((resolve, reject) => {
    const output = [];
    const done = 0;

    input.forEach((curr, i) => {
      callback(curr, (error, result) => {
        if (error) reject(error);
        done++;
        if (result) output[i] = curr;

        if (done >= input.length) {
          resolve(output.filter(Boolean));
        }
      });
    });
  });
}
