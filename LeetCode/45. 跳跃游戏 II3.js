/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let res = 0;
  let left = 0;
  let right = 0;
  while (right < nums.length - 1) {
    let nextIndex = right;
    let i = left;
    while (i <= right) {
      nextIndex = Math.max(i + nums[i], nextIndex);
      i++;
    }
    const arr = nums.slice(left, right + 1);
    left = i;
    right = nextIndex;
    res++;
  }
  return res;
};
console.log(
  jump([
    5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9,
    6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5,
  ])
);
