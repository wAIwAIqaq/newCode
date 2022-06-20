/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  toSum();
  function toSum(val = 0, arr = candidates, curArr = [], start = 0) {
    if (val == target) {
      res.push([...curArr]);
      return;
    }
    let i = start;
    while (i < arr.length) {
      if (
        val + candidates[i] > target ||
        (i > start && candidates[i] == candidates[i - 1])
      ) {
        i++;
        continue;
      }
      val += arr[i];
      curArr.push(arr[i]);
      toSum(val, arr, curArr, i + 1);
      curArr.pop();
      val -= arr[i];
      i++;
    }
  }
  return res;
};
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
