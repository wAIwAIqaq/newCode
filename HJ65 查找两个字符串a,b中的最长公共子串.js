const input1 = readline();
const input2 = readline();
const short = input1.length > input2.length ? input2 : input1;
const long = input1.length > input2.length ? input1 : input2;
let i = 0;
let j = 1;
let res = "";
while (i < short.length && j < short.length + 1) {
  let curStr = short.slice(i, j);
  if (long.indexOf(curStr) > -1) {
    res = res.length < curStr.length ? curStr : res;
    j++;
  } else {
    i++;
    j = i + 1;
  }
}
console.log(res);
