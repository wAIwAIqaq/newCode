/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let res = Infinity;
  getPath([0, 0], 0);
  function getPath(cur, val) {
    val += grid[cur[0]][cur[1]];
    if (cur[0] === grid.length - 1 && cur[1] === grid[0].length - 1) {
      res = Math.min(val, res);
      return;
    }
    if (cur[1] + 1 < grid[0].length) {
      getPath([cur[0], cur[1] + 1], val);
    }
    if (cur[0] + 1 < grid.length) {
      getPath([cur[0] + 1, cur[1]], val);
    }
  }
  return res;
};
minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
