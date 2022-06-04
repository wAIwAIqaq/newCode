const num = parseInt(readline());
const temp = num.toString(2);
if (num == 1) {
  console.log(1);
} else {
  let i = 0;
  let cur = 0;
  let res = 0;
  while (i < temp.length) {
    if (temp[i] == 1) {
      if (cur > 0) {
        cur++;
      } else {
        cur = 1;
      }
    } else {
      res = Math.max(res, cur);
      cur = 0;
    }
    res = Math.max(res, cur);
    i++;
  }
  console.log(res);
}
