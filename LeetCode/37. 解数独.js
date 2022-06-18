/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const pointArr = [];
  board.forEach((item1, index1) => {
    item1.forEach((item2, index2) => {
      if (item2 == ".") {
        pointArr.push([index1, index2]);
      }
    });
  });
  let res = [];
  setSudoKu(board, pointArr);
  let i = 0;
  while (i < 9) {
    board[i] = res[i];
    i++;
  }
  function setSudoKu(curBoard, pointArr) {
    if (pointArr.length == 0) {
      curBoard.forEach((item) => {
        res.push([...item]);
      });
      return;
    } else {
      const [x, y] = pointArr[0];
      let i = 1;
      while (i < 10) {
        curBoard[x][y] = i.toString();
        if (isValidSudoku(curBoard, x, y)) {
          setSudoKu(curBoard, pointArr.slice(1, pointArr.length));
        }
        curBoard[x][y] = ".";
        i++;
      }
    }
  }
};
function isValidSudoku(board, x, y) {
  let m = Math.floor(x / 3) * 3;
  let n = Math.floor(y / 3) * 3;
  let cur = [];
  board.slice(m, m + 3).forEach((item) => {
    cur.push(item.slice(n, n + 3));
  });
  let set = new Set();
  let count = 0;
  board[x].forEach((item) => {
    if (item != ".") {
      set.add(item);
      count++;
    }
  });
  if (count !== set.size) {
    return false;
  }
  set = new Set();
  count = 0;
  const col = board.map((item, index) => {
    return item[y];
  });
  col.forEach((item) => {
    if (item != ".") {
      set.add(item);
      count++;
    }
  });
  if (count !== set.size) {
    return false;
  }
  if (!isValidSudokuItem(cur)) {
    return false;
  }
  return true;
}
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
const input = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
solveSudoku(input);
console.log(input);
