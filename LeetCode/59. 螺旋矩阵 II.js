/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const arr = Array.from({ length: n }, () => {
    return new Array(n).fill(null);
  });
  let i = 1;
  const arrow = ["right", "bottom", "left", "top"];
  let a = 0;
  let x = 0,
    y = 0;
  while (i < n * n + 1) {
    if (arrow[a] == "right") {
      if (arr[x][y] === null) {
        arr[x][y] = i;
        y++;
      } else {
        a++;
        x++;
        y--;
        continue;
      }
    } else if (arrow[a] == "bottom") {
      if (arr[x] !== undefined && arr[x][y] === null) {
        arr[x][y] = i;
        x++;
      } else {
        a++;
        x--;
        y--;
        continue;
      }
    } else if (arrow[a] == "left") {
      if (arr[x][y] === null) {
        arr[x][y] = i;
        y--;
      } else {
        a++;
        y++;
        x--;
        continue;
      }
    } else {
      if (arr[x] !== undefined && arr[x][y] === null) {
        arr[x][y] = i;
        x--;
      } else {
        a = 0;
        y++;
        x++;
        continue;
      }
    }
    i++;
  }
  return arr;
};
