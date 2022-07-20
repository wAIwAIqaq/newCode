/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const startPos = [];
  board.forEach((itemX, x) => {
    itemX.forEach((itemY, y) => {
      if (itemY === word[0]) {
        startPos.push([x, y]);
      }
    });
  });
  if (startPos.length === 0) {
    return false;
  }
  let i = 0;
  while (i < startPos.length) {
    const [x, y] = startPos[i];
    const temp = new Array(board.length).fill(0).map((item) => {
      return new Array(board[0].length).fill(false);
    });
    temp[x][y] = true;
    if (dfs(x, y, temp)) {
      return true;
    }
    i++;
  }
  return false;
  function dfs(x, y, temp, index = 1) {
    if (index === word.length) {
      return true;
    }
    let top, bottom, left, right;
    // top
    if (
      board[x + 1] !== undefined &&
      board[x + 1][y] === word[index] &&
      !temp[x + 1][y]
    ) {
      const curTemp = temp.map((item) => {
        return item.map((item2) => {
          return item2;
        });
      });
      curTemp[x + 1][y] = true;
      top = dfs(x + 1, y, curTemp, index + 1);
    }
    // bottom
    if (
      board[x - 1] !== undefined &&
      board[x - 1][y] === word[index] &&
      !temp[x - 1][y]
    ) {
      const curTemp = temp.map((item) => {
        return item.map((item2) => {
          return item2;
        });
      });
      curTemp[x - 1][y] = true;
      bottom = dfs(x - 1, y, curTemp, index + 1);
    }
    // left
    if (
      board[x][y - 1] !== undefined &&
      board[x][y - 1] === word[index] &&
      !temp[x][y - 1]
    ) {
      const curTemp = temp.map((item) => {
        return item.map((item2) => {
          return item2;
        });
      });
      curTemp[x][y - 1] = true;
      left = dfs(x, y - 1, curTemp, index + 1);
    }
    // right
    if (
      board[x] !== undefined &&
      board[x][y + 1] === word[index] &&
      !temp[x][y + 1]
    ) {
      const curTemp = temp.map((item) => {
        return item.map((item2) => {
          return item2;
        });
      });
      curTemp[x][y + 1] = true;
      right = dfs(x, y + 1, curTemp, index + 1);
    }
    return top || bottom || left || right;
  }
};
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "E", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCESEEEFS"
  )
);
