/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// [3, 2, 4]
// 6
var twoSum = function (nums, target) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === target - nums[j]) {
        res.push(i, j);
        return res;
      }
    }
  }
};
