/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let count = 0;
  const res = [];
  dfs();
  function dfs(cur = [], count = 0) {
    if (count === nums.length) {
      res.push(cur);
      return;
    }
    dfs([...cur], count + 1);
    cur.push(nums[count]);
    dfs([...cur], count + 1);
  }
  return res;
};
console.log(subsets([1, 2, 3]));
