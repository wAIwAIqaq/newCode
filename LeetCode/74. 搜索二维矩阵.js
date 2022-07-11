/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 1,
    right = matrix.length;
  while (right - left !== 1) {
    const mid = Math.floor((right + left) / 2);
    if (matrix[mid - 1][0] <= target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  const targetLine = matrix[left - 1];
  left = 1;
  right = targetLine.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (targetLine[mid - 1] == target) {
      return true;
    } else if (targetLine[mid - 1] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
searchMatrix([[1], [2]], (target = 0));
