/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (target < nums[0]) {
    return [-1, -1];
  } else if (target > nums[nums.length - 1]) {
    return [-1, -1];
  } else {
    let left = 0;
    let right = nums.length - 1;
    while (nums[left] < nums[right]) {
      if (nums[left] < target) {
        left++;
      }
      if (nums[right] > target) {
        right--;
      }
    }
    if (nums[left] == target) {
      return [left, right];
    } else {
      return [-1, -1];
    }
  }
};
