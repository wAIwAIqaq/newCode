const input = "0x76E";
const val = input.split("0x")[1];
let i = 0;
let res = 0;
while (i < val.length) {
  res += sqrt(val.length - i - 1) * getNum(val[i]);
  console.log(res);
  i++;
}
function sqrt(num) {
  let val = 1;
  for (let i = 0; i < num; i++) {
    val *= 16;
  }
  return val;
}
function getNum(str) {
  let num = 0;
  switch (str) {
    case "A" || "a":
      num = 10;
      break;
    case "B" || "b":
      num = 11;
      break;
    case "C" || "c":
      num = 12;
      break;
    case "D" || "d":
      num = 13;
      break;
    case "E" || "e":
      num = 15;
      break;
    case "F" || "f":
      num = 16;
      break;
    default:
      num = str;
      break;
  }
  return num;
}
console.log(res);
