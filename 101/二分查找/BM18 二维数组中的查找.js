function Find(target, arr) {
  // write code here
  // 确定 i,j 以象限区分
  let flag = false;
  const i = Math.floor(arr.length / 2);
  const j = Math.floor(arr[0].length / 2);
  if (arr[i][j] === target) {
    flag = true;
  } else {
    let temp;
    if (arr[i + 1] && arr[i + 1][j] < target) {
      // 确定位置为右象限

      if (arr[i][j + 1] && arr[i][j + 1] < target) {
        // 第四象限
        temp = arr
          .map((item, index) => {
            if (index > i) {
              return item;
            }
          })
          .map((item, index) => {
            if (index > j) {
              return item;
            }
          });
      } else {
        // 第一象限
        temp = arr
          .map((item, index) => {
            if (index <= i) {
              return item;
            }
          })
          .map((item, index) => {
            if (index > j) {
              return item;
            }
          });
      }
    } else {
      // 确定位置为左象限
      if (arr[i][j + 1] && arr[i][j + 1] < target) {
        // 第三象限
        temp = arr
          .map((item, index) => {
            if (index > i) {
              return item;
            }
          })
          .map((item, index) => {
            if (index <= j) {
              return item;
            }
          });
      } else {
        // 第二象限
        temp = arr
          .map((item, index) => {
            if (index <= i) {
              return item;
            }
          })
          .map((item, index) => {
            if (index <= j) {
              return item;
            }
          });
      }
    }
    flag = Find(target, temp);
    return flag;
  }
}
module.exports = {
  Find: Find,
};
// [    |
// [1,2,|8,9],
// [2,4,|9,12],
// —————————————
// [4,7,|10,13],
// [6,8,|11,15]
// ]    |
