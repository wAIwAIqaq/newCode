/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  toSum();
  function toSum(val = 0, arr = [], start = 0) {
    if (val == target) {
      res.push([...arr]);
      return;
    }
    let i = start;
    arr = arr.slice();
    while (i < candidates.length && val + candidates[i] <= target) {
      val += candidates[i];
      arr.push(candidates[i]);
      toSum(val, arr, i);
      arr.pop();
      val -= candidates[i];
      i++;
    }
  }
  return res;
};
console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));
