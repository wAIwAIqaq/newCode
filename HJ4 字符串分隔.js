const input = "232332323";
let str = input;
let len = str.length;
let res = "";
let i = 0;
while (i < len) {
  res += str[i];
  if (res.length === 8) {
    console.log(res);
    res = "";
  } else if (i === str.length - 1) {
    while (res.length < 8) {
      res += "0";
    }
    console.log(res);
  }
  i++;
}
