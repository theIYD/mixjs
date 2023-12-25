// Filter 2D array
function filter(arr, callback) {
  const results = [];

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      // sub array
      const output = filter(elem, callback);
      results.push(output);
    } else {
      if (callback(elem)) {
        results.push(elem);
      }
    }
  }

  return results;
}
