/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pre = null;
  let i = 1;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] != nums[j]) {
      nums[++j] = nums[i];
    }
    i++;
  }
  return j + 1;
};
