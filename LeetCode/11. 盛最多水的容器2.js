/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let area = 0;
  while (left < right) {
    area = Math.max(
      area,
      Math.min(height[left], height[right]) * (right - left)
    );
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return area;
};
