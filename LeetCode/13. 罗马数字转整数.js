/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let res = 0;
  let i = 0;
  while (i < s.length) {
    res += map.get(s[i]);
    if (s[i - 1] && map.get(s[i - 1]) < map.get(s[i])) {
      res = res - 2 * map.get(s[i - 1]);
    }
    i++;
  }
  return res;
};
