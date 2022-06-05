while ((str = readline())) {
  let i = 0;
  let cur = "";
  let res = [];
  let len = 0;
  while (i < str.length) {
    if (str[i] >= 0 && str[i] <= 9) {
      cur += str[i];
      if (cur.length > len) {
        res = [];
        res.push(cur);
        len = Math.max(cur.length, len);
      } else if (cur.length == len) {
        res.push(cur);
      }
    } else {
      cur = [];
    }
    i++;
  }
  console.log(`${res.join("")},${len}`);
}
