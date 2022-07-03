/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let i = 0;
  const res = [];
  let cur = intervals[0];
  while (i < intervals.length) {
    if (intervals[i][0] <= cur[1]) {
      cur = [cur[0], Math.max(intervals[i][1], cur[1])];
    } else {
      res.push(cur);
      cur = intervals[i];
    }
    i++;
  }
  res.push(cur);
  return res;
};
merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
