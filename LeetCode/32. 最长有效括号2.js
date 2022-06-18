/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let i = 0;
  let max = "";
  const stack = [];
  const arr = s.split("");
  while (i < s.length) {
    if (s[i] == ")") {
      if (stack.pop() != "(") {
        arr[i] = "1";
      } else {
        arr[i] = "0";
      }
    } else {
      stack.push("(");
      arr[i] = "0";
    }
    i++;
  }
  i--;
  while (i >= 0) {
    if (s[i] == "(") {
      if (stack.pop() != ")") {
        arr[i] = "1";
      } else {
        arr[i] = "0";
      }
    } else if (arr[i] != "1") {
      stack.push(")");
      arr[i] = "0";
    }
    i--;
  }
  let j = 0;
  let zeroCount = 0;
  let res = 0;
  while (j < arr.length) {
    if (arr[j] == "0") {
      zeroCount++;
      res = Math.max(res, zeroCount);
    } else {
      zeroCount = 0;
    }
    j++;
  }
  return res;
};
longestValidParentheses(")()())");
