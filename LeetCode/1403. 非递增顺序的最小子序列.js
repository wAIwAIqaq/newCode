/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  let total = 0;
  nums.forEach((item) => {
    total += item;
  });
  let i = 0;
  let sum = 0;
  const res = [];
  while (i < nums.length) {
    if (sum <= total) {
      res.push(nums[i]);
      sum += nums[i];
      total -= nums[i];
    }
    i++;
  }
  return res;
};
