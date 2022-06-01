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
 * @return int整型二维数组
 */
function levelOrder(root) {
  // write code here
  const res = [];
  nextDeeper(root, 0);
  function nextDeeper(root, level) {
    res[level] = res[level] ? res[level] : [];
    res[level].push(root.val);
    let nextLevel = level + 1;
    if (root.left) {
      nextDeeper(root.left, nextLevel);
    }
    if (root.right) {
      nextDeeper(root.right, nextLevel);
    }
  }
  return res;
}
module.exports = {
  levelOrder: levelOrder,
};
