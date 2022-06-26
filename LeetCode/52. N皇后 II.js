/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const arr = Array.from({ length: n }, () => {
    return new Array(n).fill(".");
  });
  let res = 0;
  setQueen();
  function setQueen(i = 0, qArr = []) {
    if (qArr.length == n) {
      res++;
    }
    while (i < n) {
      let j = 0;
      while (j < n) {
        if (!hasOtherQueens(i, j, qArr)) {
          qArr.push([i, j]);
          setQueen(i + 1, [...qArr]);
          qArr.pop();
        }
        j++;
      }
      i++;
    }
  }
  return res;
};
function hasOtherQueens(i, j, qArr) {
  let m = 0;
  while (m < qArr.length) {
    if (
      qArr[m][0] == i ||
      qArr[m][1] == j ||
      Math.abs(qArr[m][0] - i) == Math.abs(qArr[m][1] - j)
    ) {
      return true;
    }
    m++;
  }
  return false;
}
console.log(totalNQueens(4));
