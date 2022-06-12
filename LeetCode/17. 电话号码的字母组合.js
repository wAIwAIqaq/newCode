/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const res = [];
  const map = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
    ["1", []],
  ]);
  let i = 0;
  const arr = [];
  while (i < digits.length) {
    arr.push(map.get(digits[i]));
    i++;
  }
  const maxLen = digits.length;
  handle(digits);
  function handle(rest, curArr = []) {
    if (rest.length) {
      curArr = curArr.slice();
      const curNum = rest[0];
      const subArr = map.get(curNum);
      let i = 0;
      while (i < subArr.length) {
        curArr.push(subArr[i]);
        if (curArr.length < maxLen) {
          handle(rest.slice(1, rest.length), curArr);
        } else {
          res.push(curArr.join(""));
        }
        curArr.pop();
        i++;
      }
    }
  }
  return res;
};
