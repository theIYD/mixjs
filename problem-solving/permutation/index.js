const interchange = (str, a, b) => {
  let arr = str.split("");
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr.join("");
};

const permutations = (str, left, right) => {
  if (left === right) {
    console.log(str);
    return;
  }

  for (var i = left; i <= right; i++) {
    str = interchange(str, left, i);
    permutations(str, left + 1, right);
    str = interchange(str, left, i);
  }
};

permutations("abc", 0, 2);
