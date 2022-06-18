/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudokuItem(arr) {
  const set = new Set();
  let count = 0;
  let temp = [];
  arr.forEach((item) => {
    temp = [...temp, ...item];
  });
  temp.forEach((item) => {
    if (item != ".") {
      set.add(item);
      count++;
    }
  });
  if (set.size != count) {
    return false;
  }
  return true;
}
var isValidSudoku = function (board) {
  let m = 0;
  while (m < 3) {
    let n = 0;
    while (n < 3) {
      const sudukuItem = board
        .slice(m * 3, m * 3 + 3)
        .map((item) => item.slice(n * 3, n * 3 + 3));
      if (!isValidSudokuItem(sudukuItem)) {
        return false;
      }
      n++;
    }
    m++;
  }
  let i = 0;
  while (i < board.length) {
    const set = new Set();
    let count = 0;
    board.forEach((item) => {
      if (item[i] != ".") {
        set.add(item[i]);
        count++;
      }
    });
    if (count !== set.size || !isValidSudokuItem(board[i])) {
      return false;
    }
    i++;
  }
  return true;
};
