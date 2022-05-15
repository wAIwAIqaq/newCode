const I = readline().split(" ");
const R = readline().split(" ");
//处理I
const lenI = I[0];
const arrI = I.slice(1, lenI + 1);
// 处理 R
const lenR = R[0];
const arrR = [...new Set(R.slice(1, lenR + 1).sort((a, b) => a - b))];
let res = "";
const arr = [];
let total = 0;
arrR.forEach((itemR) => {
  let itemRes = "";
  let count = 0;
  arrI.forEach((itemI, index) => {
    if (itemI.indexOf(itemR) !== -1) {
      count += repeatCount(itemI, itemR);
      itemRes += `${index} ${itemI} `;
      total += 2;
    }
  });
  if (count) {
    res = `${res}${itemR} ${count} ${itemRes}`;
    total += 2;
  }
});
function repeatCount(i, r, count = 0) {
  const anchor = r.indexOf(i);
  count++;
  const restStr = r.slice(i, r.length);
  if (restStr.indexOf(i) !== -1) {
    count += repeatCount(i, restStr, count);
  }
  return count;
}
res = `${total} ${res}`;
console.log(res);
