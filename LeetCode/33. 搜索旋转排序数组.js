/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0;
  let pre = -Infinity;
  let res = -1;
  while (i < nums.length) {
    if (target == nums[i]) {
      res = i;
      break;
    }
    if (pre > nums[i]) {
      if (target > pre || target < nums[i]) {
        break;
      }
    }
    pre = nums[i];
    i++;
  }
  return res;
};
