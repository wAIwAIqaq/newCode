/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  getItem();
  function getItem(rest = nums, cur = []) {
    if (cur.length === nums.length) {
      res.push([...cur]);
      return;
    }
    let i = 0;
    while (i < rest.length) {
      cur.push(rest[i]);
      getItem([...rest.slice(0, i), ...rest.slice(i + 1, nums.length)], cur);
      cur.pop();
      i++;
    }
  }
  return res;
};
console.log(permute([1, 1, 2]));
