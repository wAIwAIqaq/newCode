/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  // 右括号前必须要有左括号
  handle();
  function handle(cStr = "", left = 0, right = 0) {
    if (left == n && right == n) {
      res.push(cStr);
    } else {
      if (left <= n) {
        cStr += "(";
        handle(cStr, left + 1, right);
      }
      cStr = cStr.slice(0, cStr.length - 1);
      if (right <= n && right < left) {
        cStr += ")";
        handle(cStr, left, right + 1);
      }
    }
  }
  return res;
};
