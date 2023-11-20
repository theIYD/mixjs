// Given a binary tree, return it's height
// Input: root, Output: integer
function height(root) {
  if (!root) return 0;

  // Hypothesis
  let left = height(root.left);
  let right = height(root.right);

  // Induction
  return 1 + Math.max(left, right);
}
