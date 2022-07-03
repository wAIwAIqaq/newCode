/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let i = 0;
  let [left, right] = newInterval;
  while (i < intervals.length) {
    if (newInterval[1] < intervals[i][0] && newInterval[1] <= intervals[i][1]) {
      break;
    } else if (intervals[i][1] >= left) {
      if (right <= intervals[i][1]) {
        right = Math.max(right, intervals[i][1]);
      }
      left = Math.min(intervals[i][0], left);
      intervals.splice(i, 1);
      continue;
    }
    i++;
  }
  intervals = [
    ...intervals.slice(0, i),
    [left, right],
    ...intervals.slice(i, intervals.length),
  ];
  return intervals;
};
insert([[1, 5]], [6, 8]);
