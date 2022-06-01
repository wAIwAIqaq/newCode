/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
  // write code here
  return order(pRoot, pRoot);
}
function order(root1, root2) {
  if (root1 === null && root2 == null) {
    return true;
  } else if (root1 === null || root2 === null || root1.val !== root2.val) {
    return false;
  }
  return order(root1.left, root2.right) && order(root1.right, root2.left);
}
module.exports = {
  isSymmetrical: isSymmetrical,
};
