const input = readline();
let i = 0;
let res = "";
while (i < input.length) {
  if (!isNum(input[i - 1]) && isNum(input[i])) {
    res += `*`;
  }
  res += input[i];
  if (!isNum(input[i + 1]) && isNum(input[i])) {
    res += `*`;
  }
  i++;
}
if (isNum(res[res.length - 1])) {
  res += "*";
}
console.log(res);
function isNum(str) {
  if (Number(str) == str) {
    return true;
  } else {
    return false;
  }
}
