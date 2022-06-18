/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  if (target < nums[left]) {
    return left;
  }
  if (target > nums[right]) {
    return right + 1;
  }
  while (left < right) {
    if (nums[left] < target) {
      left++;
    } else if (nums[left] == target) {
      return left;
    }
    if (nums[right] > target) {
      right--;
    } else if (nums[right] == target) {
      return right;
    }
  }
  if (nums[left] >= target) {
    return left;
  } else {
    return left + 1;
  }
};
