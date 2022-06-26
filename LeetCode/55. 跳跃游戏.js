/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const arr = nums.findIndex((item) => {
    if (item == 0) {
      return true;
    }
  });
  console.log(arr);
};
canJump([3, 2, 1, 0, 4, 0]);
