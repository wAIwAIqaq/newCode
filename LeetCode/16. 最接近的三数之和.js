/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let i = 1;
  let res = Infinity;
  while (i < nums.length - 1) {
    let j = i - 1;
    let k = i + 1;
    const cur = nums[i];
    while (j >= 0 && k <= nums.length - 1) {
      let left = nums[j];
      let right = nums[k];
      const sum = left + cur + right;
      res = Math.abs(sum - target) > Math.abs(res - target) ? res : sum;
      if (target - sum > 0) {
        k++;
      } else if (target - sum == 0) {
        return sum;
      } else {
        j--;
      }
    }
    i++;
  }
  return res;
};
