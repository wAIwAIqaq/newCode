/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  const arr = String(n).split("").reverse().map(Number);
  let i = arr.length - 1;
  let count = 0;
  let hasSet = new Set();
  while (i > 0) {
    let j = 0;
    while (j < arr[i]) {
      if (!hasSet.has(j)) {
        let n = 10 - hasSet.size;
        count += Anx(n, i);
      }
      j++;
    }
    hasSet = new Set([...hasSet, arr[i]]);
    i--;
  }
  let m = 0;
  while (m <= arr[0]) {
    if (!hasSet.has(m)) {
      count++;
    }
    m++;
  }
  return count - 1;
};
function Anx(n, x) {
  let c = 1;
  while (x != 0) {
    c *= n;
    if (c != 1) {
      n--;
    }
    x--;
  }
  return c;
}
console.log(countSpecialNumbers(45352));
