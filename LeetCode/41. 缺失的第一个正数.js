/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let i = 0;
  nums.sort((a, b) => a - b);
  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length) {
      nums[nums[i] - 1] = nums[i];
    }
    i++;
  }
  i = 0;
  while (i < nums.length) {
    if (nums[i] != i + 1) {
      break;
    }
    i++;
  }
  return i + 1;
};
console.log(firstMissingPositive([1]));
