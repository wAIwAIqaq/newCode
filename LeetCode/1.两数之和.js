/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// [3, 2, 4]
// 6
var twoSum = function (nums, target) {
  const map = new Map();
  nums.forEach((item, index) => {
    map.set(item, index);
  });
  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i])) {
      if (i !== map.get(target - nums[i])) {
        return [i, map.get(target - nums[i])];
      }
    }
  }
};
