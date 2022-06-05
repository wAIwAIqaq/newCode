let target = readline();
flag = true;
if (target < 0) {
  target = -target;
  flag = false;
}
let i = 0;
while (Math.pow(i, 3) < target) {
  i++;
}
let j = i - 1;
while (Math.pow(j, 3) < target) {
  j += 0.01;
}
const res = j.toFixed(1);
console.log(flag ? res : -res);
