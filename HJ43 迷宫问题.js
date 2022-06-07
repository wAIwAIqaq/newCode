const [len1, len2] = readline().split(" ").map(Number);
const arr = [];
while ((input = readline())) {
  arr.push(input.split(" ").map(Number));
}
const doneList = Array.from({ length: len1 }, () => {
  return new Array(len2).fill(0);
});
const res = [];
let arr1 = [1, 0, -1, 0];
let arr2 = [0, 1, 0, -1];
movePath([[0, 0]], 0, 0);
// 递归
function movePath(pathArr, m, n) {
  if (m == len1 - 1 && n == len2 - 1) {
    pathArr.map((item) => {
      console.log(`(${item[0]},${item[1]})`);
    });
    return;
  }
  let i = 0;
  const curPath = pathArr.slice();
  while (i < 4) {
    let curX = n + arr2[i];
    let curY = m + arr1[i];
    if (curX >= 0 && curY >= 0 && curX < len2 && curY < len1) {
      if (arr[curY][curX] == 0 && doneList[curY][curX] == 0) {
        doneList[curY][curX] = 1;
        curPath.push([curY, curX]);
        movePath(curPath, curY, curX);
        curPath.pop();
        doneList[curY][curX] = 0;
      }
    }
    i++;
  }
  return;
}
