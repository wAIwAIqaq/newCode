/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  arr = x.toString().split("");
  l = arr.length;
  let str1 = "";
  let str2 = "";
  if (l % 2 == 0) {
    str1 = arr.slice(0, l / 2).join("");
    str2 = arr
      .slice(l / 2, l)
      .reverse()
      .join("");
  } else {
    str1 = arr.slice(0, l / 2).join("");
    str2 = arr
      .slice(l / 2 + 1, l)
      .reverse()
      .join("");
  }
  console.log(str1, str2);
  if (str1 == str2) {
    return true;
  } else {
    return false;
  }
};
