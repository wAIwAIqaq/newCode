/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let res = "";
  let i = 0;
  while (i < n) {
    res += "a";
    i++;
  }
  if ((n & 1) === 0) {
    res = res.slice(1, );
    res += "b";
  }
  return res;
};
console.log(generateTheString(4));
