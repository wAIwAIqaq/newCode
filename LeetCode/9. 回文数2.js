/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  s = x.toString();
  let i = 0;
  while (i < s.length) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
      break;
    }
    i++;
  }
  return true;
};
