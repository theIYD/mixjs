// Find all paths in nxm grid
const path = (n, m) => {
  if (n === 1 || m === 1) return 1;
  return path(n, m - 1) + path(n - 1, m);
};
