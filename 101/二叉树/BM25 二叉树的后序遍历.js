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
 * @return int整型一维数组
 */
function postorderTraversal(root) {
  // write code here
  const res = [];
  function addBranch(root, res) {
    if (!root) {
      return;
    }
    addBranch(root.left, res);
    addBranch(root.right, res);
    res.push(root.val);
  }
  addBranch(root, res);
  return res;
}
module.exports = {
  postorderTraversal: postorderTraversal,
};
