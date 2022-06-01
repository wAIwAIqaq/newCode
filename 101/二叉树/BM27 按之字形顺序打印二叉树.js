/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  // write code here
  if (!pRoot) {
    return [];
  }
  const res = [];
  nextDeeper(pRoot, 0, true);
  function nextDeeper(root, level, flag) {
    res[level] = res[level] ? res[level] : [];
    if (flag) {
      res[level].push(root.val);
    } else {
      res[level].unshift(root.val);
    }
    let nextLevel = level + 1;
    if (root.left) {
      nextDeeper(root.left, nextLevel, !flag);
    }
    if (root.right) {
      nextDeeper(root.right, nextLevel, !flag);
    }
  }
  return res;
}
module.exports = {
  Print: Print,
};
