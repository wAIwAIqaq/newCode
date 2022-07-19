/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const arr = [];
  dfs(1, []);
  function dfs(cur, curArr) {
    if (curArr.length === k) {
      arr.push(curArr);
      return;
    }
    if (curArr.length + n - cur + 1 < k) return;
    dfs(cur + 1, [...curArr, cur]);
    dfs(cur + 1, [...curArr]);
  }
  return arr
};
combine(4, 2);
