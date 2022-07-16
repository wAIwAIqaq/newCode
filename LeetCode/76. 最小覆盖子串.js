/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const arr = s.split("");
  const tArr = t.split("");
  let k = 0;
  while (k < tArr.length) {
    if (arr.indexOf(tArr[k]) !== -1) {
      arr.splice(arr.indexOf(tArr[k]), 1);
      tArr.splice(k, 1);
    } else {
      return "";
    }
  }
  let i = 0;
  let res = s;
  while (i < s.length) {
    const temp = t.split("");
    if (temp.indexOf(s[i]) !== -1) {
      temp.splice(t.indexOf(s[i]), 1);
      let j = 0;
      const str = s.slice(i + 1, s.length);
      let m = -1;
      while (j < temp.length) {
        const c = str.indexOf(temp[j]);
        if (c === -1) {
          m = -2;
          break;
        }
        m = Math.max(m, c);
        j++;
      }
      if (m !== -2) {
        const cur = s.slice(i, i + m + 2);
        if (cur.length < res.length) {
          res = cur;
        }
      }
    }
    i++;
  }
  return res;
};
console.log(minWindow((s = "bbaa"), (t = "aba")));
