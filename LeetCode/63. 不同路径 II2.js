/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
  const arr = new Array(n).fill(0);
  arr[0] = obstacleGrid[0][0] == 0 ? 1 : 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (obstacleGrid[i][j] == 1) {
        arr[j] = 0;
        continue;
      }
      if (j - 1 >= 0 && obstacleGrid[i][j - 1] == 0) {
        arr[j] += arr[j - 1];
      }
    }
  }
  return arr.pop();
};
uniquePathsWithObstacles([[0, 0]]);
