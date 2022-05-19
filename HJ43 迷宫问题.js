const [len1, len2] = readline().split(" ");
const arr = [];
for (let i = 0; i < len1; i++) {
  const itemArr = readline().split(" ");
  arr.push(itemArr);
}
console.log(arr);
const pathArr = [[0, 0]];
let flag = true;
let i = 0;
let j = 0;
// 递归
pathHandle();
function pathHandle(path = [0, 0]) {
  if (path[parseInt(len1)][parseInt(len2)] == 0) {
    pathArr = path;
  } else {
    move(1, path);
    move(2, path);
    move(3, path);
    move(4, path);
  }
}
function move(type, path) {
  if (type == 1 && arr[i][j + 1] == 0) {
    path.push([i, j + 1]);
    pathHandle(path);
  } else if (type == 2 && arr[i][j - 1] == 0) {
    path.push([i, j + 1]);
    pathHandle(path);
  } else if (type == 3 && arr[i + 1][j] == 0) {
    path.push([i + 1, j]);
    pathHandle(path);
  } else if (type == 4 && arr[i - 1][j] == 0) {
    path.push([i - 1, j]);
    pathHandle(path);
  }
}
pathArr.forEach((item) => {
  console.log(`(${item[0]},${item[1]})`);
});
