/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const xOp = [1, 0, -1, 0];
  const yOp = [0, -1, 0, 1];
  const total = matrix[0].length * matrix.length;
  const res = [];
  let i = 0;
  while (res.length < total) {
    if (xOp[i % 4] == 1) {
      res.push(...matrix.shift());
      i++;
    }
    if (xOp[i % 4] == -1) {
      res.push(...matrix.pop().reverse());
      i++;
    }
    if (yOp[i % 4] == -1) {
      matrix.forEach((item) => res.push(...item.splice(item.length - 1, 1)));
      i++;
    }
    if (yOp[i % 4] == 1) {
      const subArr = [];
      matrix.forEach((item) => subArr.push(...item.splice(0, 1)));
      res.push(...subArr.reverse());
      i++;
    }
  }
  return res;
};
