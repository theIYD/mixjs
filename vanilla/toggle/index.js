function toggle(...list) {
  let current = -1;
  let length = list.length;

  return function () {
    current = (current + 1) % length;
    return list[current];
  };
}
