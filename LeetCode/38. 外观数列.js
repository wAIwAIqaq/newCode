/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n == 1) {
    return "1";
  }
  return toExplain(countAndSay(n - 1));
};
function toExplain(str) {
  let i = 0;
  let pre = str[0];
  let count = 0;
  let res = "";
  while (i <= str.length) {
    if (str[i] != pre) {
      res += `${count}${pre}`;
      count = 1;
    } else {
      count++;
    }
    pre = str[i];
    i++;
  }
  return res;
}
