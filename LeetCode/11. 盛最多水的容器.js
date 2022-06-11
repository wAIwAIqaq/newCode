/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力法
var maxArea = function (height) {
  return Math.max(findUpperLast(height), findUpperLast(height.reverse()));
};
function findUpperLast(height) {
  let area = 0;
  let i = 0;
  while (i < height.length) {
    // 往后开始找
    let j = height.length - 1;
    while (j > i) {
      // 找第一个大于它等于的高度的
      if (height[j] >= height[i]) {
        area = Math.max(area, height[i] * (j - i));
        break;
      }
      j--;
    }
    i++;
  }
  return area;
}
