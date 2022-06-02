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
 * @param pRoot TreeNode类
 * @return TreeNode类
 */
function Mirror(pRoot) {
  // write code here
  function toMirror(root) {
    let o;
    if (!root) return root;
    if (root.left || root.right) {
      o = toMirror(root.left);
      root.left = toMirror(root.right);
      root.right = o;
    }
    return root;
  }
  toMirror(pRoot);
  return pRoot;
}
module.exports = {
  Mirror: Mirror,
};
