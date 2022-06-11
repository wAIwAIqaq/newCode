/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = "";
  let i = 0;
  while (i < strs[0].length) {
    let j = 0;
    let flag = true;
    while (j < strs.length) {
      if (!strs[j][i] || strs[j][i] !== strs[0][i]) {
        return res;
      } else {
        flag = false;
      }
      j++;
    }
    if (!flag) {
      res += strs[0][i];
    }
    i++;
  }
  return res;
};
