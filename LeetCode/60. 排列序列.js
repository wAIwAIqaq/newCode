/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let arr = [];
  let i = 1;
  while (i < n + 1) {
    arr.push(i);
    i++;
  }
  // dfs
  const list = [];
  getArr(arr, []);
  function getArr(rest, res) {
    if (res.length == n) {
      list.push(res);
      return;
    }
    let i = 0;
    while (i < rest.length) {
      const tempArr = rest.slice();
      res.push(tempArr[i]);
      tempArr.splice(i, 1);
      getArr(tempArr, [...res]);
      res.pop();
      i++;
    }
  }
  return list[k - 1].join("");
};
getPermutation(3, 3);
