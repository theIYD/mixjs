// Recursive approach
// T = theta(logN), S = theta(logN)
// T = O(N), S = O(N)
var findClosestBST = function (tree, target) {
  return findClosestInBSTHelper(tree, target, Infinity);
};

var findClosestInBSTHelper = function (tree, target, closest) {
  if (tree === null) {
    return closest;
  }

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (tree.value > target) {
    return findClosestInBSTHelper(tree.left, target, closest);
  } else if (tree.value < target) {
    return findClosestInBSTHelper(tree.right, target, closest);
  } else {
    return closest;
  }
};

// Iterative approach
// T = theta(logN), S = theta(1)
// T = O(N), S = O(1)
var findClosestBSTIterative = function (tree, target) {
  return findClosestInBSTHelper(tree, target, Infinity);
};

var findClosestInBSTHelperIterative = function (tree, target, closest) {
  let current = tree;
  while (current !== null) {
    if (Math.abs(target - closest) > Math.abs(target - current.value)) {
      closest = current.value;
    }

    if (current.value > target) {
      current = current.left;
    } else if (current.value < target) {
      current = current.right;
    } else {
      break;
    }
  }

  return closest;
};
