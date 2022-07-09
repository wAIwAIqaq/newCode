/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const arr = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        arr[i][j] = grid[0][0];
      } else {
        const top = arr[i - 1] === undefined ? Infinity : arr[i - 1][j];
        const left = arr[i][j - 1] === undefined ? Infinity : arr[i][j - 1];
        arr[i][j] = Math.min(top, left) + grid[i][j];
      }
    }
  }
  return arr.pop().pop();
};
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
