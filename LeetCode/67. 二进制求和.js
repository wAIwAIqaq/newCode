/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let flag = 0;
  let res = "";
  while (a[i] !== undefined || b[j] !== undefined) {
    const ca = a[i] === undefined ? 0 : a[i];
    const cb = b[j] === undefined ? 0 : b[j];
    if (Number(ca) + Number(cb) + flag == 0) {
      res = `0${res}`;
    } else if (Number(ca) + Number(cb) + flag == 1) {
      res = `1${res}`;
    } else if (Number(ca) + Number(cb) + flag == 2) {
      res = `0${res}`;
      flag = 1;
      i--;
      j--;
      continue;
    } else {
      res = `1${res}`;
      flag = 1;
      i--;
      j--;
      continue;
    }
    flag = 0;
    i--;
    j--;
  }
  if (flag) {
    res = `1${res}`;
  }
  return res;
};
console.log(addBinary("1010", "1011"));
