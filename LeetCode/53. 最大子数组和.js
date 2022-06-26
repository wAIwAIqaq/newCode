/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = 0;
  let max = nums[0];
  nums.forEach((item) => {
    pre = Math.max(item + pre, item);
    max = Math.max(pre, max);
  });
  return max;
};
maxSubArray([-5]);
