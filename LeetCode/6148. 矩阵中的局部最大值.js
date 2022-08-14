/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  let i = 0;
  const m = grid.length - 2;
  const resArr = Array.from({length:m},()=>{
        return new Array(m)
  })
  while (i < m) {
    let j = 0;
    while (j < m) {
      const curGrid = [
        [grid[i][j], grid[i][j + 1], grid[i][j + 2]],
        [grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2]],
        [grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]],
      ];
      const max = Math.max(...curGrid.map(item => Math.max(...item)))
      resArr[i][j] = max;
      j++;
    }
    i++;
  }
  return resArr
};
largestLocal([
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
]);
