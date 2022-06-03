const x = readline();
const y = readline();
const z = readline();
let i = 0;
const arr1 = [];
while (i < x) {
  arr1.push(
    readline()
      .split(" ")
      .map((item) => {
        return Number(item);
      })
  );
  i++;
}
let j = 0;
const arr2 = [];
while (j < y) {
  arr2.push(
    readline()
      .split(" ")
      .map((item) => {
        return Number(item);
      })
  );
  j++;
}
let res = Array.from({ length: x }, () => Array(z).fill(0));
let m = 0;
while (m < x) {
  let n = 0;
  while (n < z) {
    res[m][n] = getVal(m, n);
    n++;
  }
  m++;
}
function getVal(m, n) {
  let i = 0;
  let res = 0;
  let temp1 = arr1[m];
  let temp2 = arr2.map((item) => {
    return item[n];
  });
  while (i < temp1.length) {
    res += temp1[i] * temp2[i];
    i++;
  }
  return res;
}
res.forEach((item) => {
  console.log(item.join(" "));
});
