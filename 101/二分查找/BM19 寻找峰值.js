/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
function findPeakElement(nums) {
  // write code here
  if (nums.length == 1 || (nums[1] && nums[0] > nums[1])) {
    return 0;
  } else if (nums && nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1;
  }
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }
}
module.exports = {
  findPeakElement: findPeakElement,
};
