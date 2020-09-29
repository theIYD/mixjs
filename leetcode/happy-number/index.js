var isHappy = function(n) {
  let visited = [];
  return helper(n, visited);
};

function helper(n, visited) {
  if (n == 1) {
    return true;
  }
  let result = 0;
  if (visited[n]) {
    return false;
  }
  visited[n] = true;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    result += Math.pow(n[i], 2);
  }

  return helper(result, visited);
}
