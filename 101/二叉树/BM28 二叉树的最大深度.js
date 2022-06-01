/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类
 * @return int整型
 */
function maxDepth(root) {
  // write code here
  if (!root) {
    return 0;
  }
  let res = 0;
  findDeep(root, 0);
  function findDeep(root, deep) {
    if (root) {
      res = Math.max(res, deep + 1);
    }
    if (root.left) {
      findDeep(root.left, deep + 1);
    }
    if (root.right) {
      findDeep(root.right, deep + 1);
    }
  }
  return res;
}
module.exports = {
  maxDepth: maxDepth,
};
