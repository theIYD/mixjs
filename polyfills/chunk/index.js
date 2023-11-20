// Lodash's chunk
function chunk(arr, size) {
  const processingArr = [...arr],
    resultantArr = [];
  if (size <= 0) return resultantArr;

  while (processingArr.length > 0) {
    const chunked = processingArr.splice(0, size);
    resultantArr.push(chunked);
  }

  return resultantArr;
}

console.log(chunk([1, 2, 3, 4, 5], 3));
