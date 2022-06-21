/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 反向跳
  let i = nums.length - 2;
  let index = i;
  let res = 0;
  while (nums.length > 1) {
    if (i == -1) {
      nums.splice(index + 1, nums.length);
      i = nums.length - 2;
      index = i;
      res++;
    }
    const curlen = nums.length - 1 - i;
    if (curlen <= nums[i]) {
      index = i;
    }
    i--;
  }
  return res;
};
console.log(
  jump([
    5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9,
    6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5,
  ])
);
