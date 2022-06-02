/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  if (!pRoot) return true;
  // write code here
  if (
    findHeight(pRoot.left) - findHeight(pRoot.right) > 1 ||
    findHeight(pRoot.right) - findHeight(pRoot.left) > 1
  )
    return false;
  return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}
function findHeight(root) {
  if (!root) return 0;
  return 1 + Math.max(findHeight(root.left), findHeight(root.right));
}
module.exports = {
  IsBalanced_Solution: IsBalanced_Solution,
};
