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
  let result = "";
  let count = 0;
  return getArr(arr, []);
  function getArr(rest, res) {
    if (res.length == n) {
      return res.join("");
    }
    let i = 0;
    while (i < rest.length) {
      const leafCount = getLeafCount(rest.length - 1);
      if (count + leafCount < k) {
        count += leafCount;
        i++;
        continue;
      }
      const tempArr = rest.slice();
      res.push(tempArr[i]);
      tempArr.splice(i, 1);
      return getArr(tempArr, [...res]);
    }
  }
};
function getLeafCount(n) {
  let i = 1;
  let res = 1;
  while (i < n + 1) {
    res *= i;
    i++;
  }
  return res;
}
console.log(getPermutation(4, 9));
