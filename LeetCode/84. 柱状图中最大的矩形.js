/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let i = 0;
  let res = 0;
  while (i < heights.length) {
    let short = heights[i];
    let j = i;
    while (j >= 0) {
      if (heights[j] < short) {
        short = heights[j];
      }
      res = Math.max(short * (i - j + 1), res);
      j--;
    }
    i++;
  }
  return res;
};
console.log(largestRectangleArea((heights = [2, 1, 5, 6, 2, 3])));
