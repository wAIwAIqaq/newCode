/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search(nums, target) {
  // write code here
  const left = nums.slice(0, Math.floor(nums.length / 2));
  const right = nums.slice(Math.floor(nums.length / 2), nums.length);
  if (target > right[0]) {
    return search(right, target) === -1
      ? -1
      : search(right, target) + left.length;
  } else if (target < left[left.length - 1]) {
    return search(left, target);
  } else if (target == left[left.length - 1]) {
    return left.length - 1;
  } else if (target == right[0]) {
    return left.length;
  } else {
    return -1;
  }
}
module.exports = {
  search: search,
};
