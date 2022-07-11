/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const n = grid.length;
  const f = new Array(2 * n - 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(-Infinity)));
  f[0][0][0] = grid[0][0];
  for (let i = 1; i < 2 * n - 1; ++i) {
    for (let x1 = Math.max(i - n + 1, 0); x1 <= Math.min(i, n - 1); ++x1) {
      const y1 = i - x1;
      if (grid[x1][y1] === -1) {
        continue;
      }
      for (let x2 = x1; x2 <= Math.min(i, n - 1); ++x2) {
        const y2 = i - x2;
        if (grid[x2][y2] === -1) {
          continue;
        }
        let res = f[i - 1][x1][x2]; // 都往右
        if (x1 > 0) {
          res = Math.max(res, f[i - 1][x1 - 1][x2]); // 往下 往右
        }
        if (x2 > 0) {
          res = Math.max(res, f[i - 1][x1][x2 - 1]); // 往右 往下
        }
        if (x1 > 0 && x2 > 0) {
          res = Math.max(res, f[i - 1][x1 - 1][x2 - 1]); // 往下 往下
        }
        res += grid[x1][y1];
        if (x1 !== x2) {
          res += grid[x2][y2];
        }
        f[i][x1][x2] = res;
      }
    }
  }
  return Math.max(f[2 * n - 2][n - 1][n - 1], 0);
};
cherryPickup(
  (grid = [
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ])
);
