/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let m = 0;
  //   while (m < matrix.length) {
  //     matrix[m].reverse();
  //     m++;
  //   }
  matrix.forEach((item) => item.reverse());
  let i = 0;
  let max = matrix.length - 1;
  while (i < max) {
    let k = 0;
    while (k < max - i + 1) {
      [matrix[i][k], matrix[max - k][max - i]] = [
        matrix[max - k][max - i],
        matrix[i][k],
      ];
      k++;
    }
    i++;
  }
};
rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
