/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  // 滑块思想
  let i = 0;
  let j = words.join("").length;
  const res = [];
  const arr = [];
  while (j <= s.length) {
    const curStr = s.slice(i, j);
    if (hasAllWords(curStr.split(""), [...words])) {
      res.push(i);
    }
    t;
    j++;
    i++;
  }
  return res;
};
function hasAllWords(arr, words) {
  const set = new Set();
  const len = words[0].length;
  while (arr.length) {
    const cur = arr.splice(0, len).join("");
    const index = words.findIndex((item) => item == cur);
    words[index] = null;
    if (index == -1 || set.has(index)) {
      return false;
    } else {
      set.add(index);
    }
  }
  return true;
}
