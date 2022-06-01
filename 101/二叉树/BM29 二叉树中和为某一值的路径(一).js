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
 * @param sum int整型
 * @return bool布尔型
 */
function hasPathSum(root, sum) {
  // write code here
  if (!root) {
    return false;
  }
  let res = false;
  isSumEqual(root, 0);
  function isSumEqual(root, preVal) {
    if (root) {
      let curVal = root.val + preVal;
      if (root.val + preVal === sum && !root.left && !root.right) {
        res = true;
      } else {
        if (root.left) {
          isSumEqual(root.left, curVal);
        }
        if (root.right) {
          isSumEqual(root.right, curVal);
        }
      }
    }
  }
  return res;
}
module.exports = {
  hasPathSum: hasPathSum,
};
