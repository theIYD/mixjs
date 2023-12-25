function countElementsInArray(arr, callback) {
  let count = 0;

  function search(arr, callback) {
    for (let elem of arr) {
      if (Array.isArray(arr)) {
        search(elem, callback);
      } else {
        if (callback(elem)) {
          count++;
        }
      }
    }
  }

  search(arr, callback);

  return count;
}
