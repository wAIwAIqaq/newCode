/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let pre = -Infinity;
  let count = 0;
  while (i < nums.length) {
    if (nums[i] === pre) {
      if (count < 1) {
        count++;
      } else {
        nums.splice(i, 1);
        continue;
      }
    } else {
      count = 0;
      pre = nums[i]
    }
    i++;
  }
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
