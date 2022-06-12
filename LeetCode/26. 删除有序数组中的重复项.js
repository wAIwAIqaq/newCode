/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pre = null;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] != pre) {
      pre = nums[i];
    } else {
      nums.splice(i, 1);
      i--;
    }
    i++;
  }
};
