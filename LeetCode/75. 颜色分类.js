/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      i++;
    } else if (nums[i] === 2) {
      nums.splice(i, 1);
      nums.push(2);
      j--;
    } else {
      i++;
    }
    if (nums[j] === 0) {
      nums.splice(j, 1);
      nums.unshift(0);
      i++;
    } else if (nums[j] === 2) {
      nums.splice(j, 1);
      nums.push(2);
      j--;
    } else {
      j--;
    }
  }
};
sortColors([1,0,0]);
