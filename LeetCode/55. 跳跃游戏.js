/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let i = nums.length - 2;
  let n = 1;
  while (i >= 0) {
    if (nums[i] >= n) {
      n = 1;
    } else {
      n++;
    }
    if (i == 0 && n > 1) {
      return false;
    }
    i--;
  }
  return true;
};
