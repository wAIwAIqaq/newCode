/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let count = 0;
  let i = 0;
  while (i < grid.length) {
    let j = 0;
    while (j < grid[0].length) {
      let row = [];
      let col = [];
      grid.forEach((item, index) => {
        row.push(item[j]);
        if (index === i) {
          col = [...item];
        }
      });
      if (row.join(" ") === col.join(" ")) {
        count++;
      }
      j++;
    }
    i++;
  }
  return count;
};
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);
