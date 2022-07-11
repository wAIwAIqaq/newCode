/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const x0 = new Set();
  const y0 = new Set();
  matrix.forEach((itemX, x) => {
    itemX.forEach((item, y) => {
      if (item == 0) {
        x0.add(x);
        y0.add(y);
      }
    });
  });
  let i = 0;
  while (i < matrix.length) {
    let j = 0;
    while (j < matrix[0].length) {
      if (x0.has(i) || y0.has(j)) {
        matrix[i][j] = 0;
      }
      j++;
    }
    i++;
  }
};
setZeroes(
  (matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
