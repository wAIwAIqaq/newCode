const str = readline();
let i = 0;
let res = "";
while (i < str.length - res.length) {
  let cur = str[i];
  // odd
  // 往前回溯，跟往后查找
  let j = 1;
  while (str[i - j] && str[i + j] && str[i - j] == str[i + j]) {
    cur = `${str[i - j]}${cur}${str[i + j]}`;
    j++;
  }
  res = res.length > cur.length ? res : cur;
  // even
  cur = "";
  let k = 0;
  while (str[i - k] && str[i + k + 1] && str[i - k] == str[i + k + 1]) {
    cur = `${str[i - k]}${cur}${str[i + k + 1]}`;
    k++;
  }
  res = res.length > cur.length ? res : cur;
  i++;
}
console.log(res.length);
