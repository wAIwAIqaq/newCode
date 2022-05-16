// 超过34.52% 用Javascript_V8提交的代码
// 超过56.87%用Javascript_V8提交的代码
const num = 5;
let i = 0;
while (i < num) {
  let sub = 0;
  const arr = new Array(num - i);
  let f = ((1 + num) * num) / 2 - i;
  let j = 0;
  while (j < num - i) {
    f = f - sub;
    arr.unshift(f);
    if (!sub) {
      sub = num;
    } else {
      sub--;
    }
    j++;
  }
  i++;
  console.log(arr.join(" "));
}
