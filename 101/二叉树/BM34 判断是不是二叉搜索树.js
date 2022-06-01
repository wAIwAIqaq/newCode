/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @return bool布尔型
 */
function isValidBST(root) {
  // write code here
  function getRes(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
      getRes(root.left, min, root.val) && getRes(root.right, root.val, max)
    );
  }
  return getRes(root, -Infinity, Infinity);
}
module.exports = {
  isValidBST: isValidBST,
};
