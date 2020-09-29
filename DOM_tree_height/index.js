// Get height of DOM tree
function heightOfTree(tree) {
  if (!tree) return 0;
  let maxHeight = 0;

  for (const child of tree.children) {
    const height = getHeight(child);
    if (height > maxHeight) {
      maxHeight = height;
    }
  }

  return 1 + maxHeight;
}
