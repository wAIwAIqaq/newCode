/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param t1 TreeNode类
 * @param t2 TreeNode类
 * @return TreeNode类
 */
function mergeTrees(t1, t2) {
  // write code here
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  const res = new TreeNode(t1.val + t2.val);
  res.left = mergeTrees(t1.left, t2.left);
  res.right = mergeTrees(t1.right, t2.right);
  return res;
}
module.exports = {
  mergeTrees: mergeTrees,
};
