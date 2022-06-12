/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums = nums.sort((a, b) => a - b);
  let i = 1;
  while (i < nums.length - 1) {
    const cur = nums[i];
    let left = i - 1,
      right = i + 1;
    while (left >= 0 && right <= nums.length - 1) {
      pre = nums[left];
      next = nums[right];
      if (cur + pre + next == 0 && pre <= 0 && next >= 0) {
        if (!res.includes(`${pre}, ${cur}, ${next}`)) {
          res.push(`${pre}, ${cur}, ${next}`);
        }
        if (!nums[left - 1] && nums[left - 1] !== 0) {
          left--;
        } else {
          right++;
        }
      } else if (cur + pre + next > 0) {
        left--;
      } else if (cur + pre + next < 0) {
        right++;
      }
    }
    i++;
  }
  return res.map((item) => {
    return item.split(",").map(Number);
  });
};
