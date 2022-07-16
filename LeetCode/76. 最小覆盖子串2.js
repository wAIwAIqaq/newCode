/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 记录所有s中在t中的索引
  const anchors = [];
  let i = 0;
  while (i < s.length) {
    if (t.includes(s[i])) {
      anchors.push([s[i], i]);
    }
    i++;
  }
  let m = 0;
  const tMap = new Map();
  while (m < t.length) {
    tMap.set(t[m], tMap.get(t[m]) ? tMap.get(t[m]) + 1 : 1);
    m++;
  }
  let count = tMap.size;
  let left = 0,
    right = 0;
  let res = "";
  while (right < anchors.length) {
    let c = anchors[right][0];
    if (tMap.has(c)) {
      tMap.set(c, tMap.get(c) - 1);
      if (tMap.get(c) === 0) count -= 1;
    }
    while (count === 0) {
      const newRes = s.slice(anchors[left][1], anchors[right][1] + 1);
      if (!res || newRes.length < res.length) res = newRes;
      const c2 = anchors[left][0];
      if (tMap.has(c2)) {
        tMap.set(c2, tMap.get(c2) + 1);
        if (tMap.get(c2) === 1) count += 1;
      }
      left += 1;
    }
    right++
  }
  return res;
};
console.log(minWindow((s = "ADOBECODEBANC"), (t = "ABC")));
