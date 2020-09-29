/*
	Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
		4
       / \
      2   7
     / \
    1   3

    val = 2

    Return 2     
	      / \   
	     1   3
 */
var searchBST = (root, val) => {
    if(!root || root.val === val) return root;
     else temp = val < root.val ? searchBST(root.left, val) : searchBST(root.right, val)
        
    return temp
};