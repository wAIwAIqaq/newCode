/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const set = new Set();
  getItem();
  function getItem(rest = nums, cur = []) {
    if (cur.length === nums.length) {
      set.add(cur.join(","));
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
  const res = [...set].map((item) => {
    return item.split(",").map(Number);
  });
  return res;
};
console.log(permuteUnique([1, 1, 2]));
