const head = "人民币";
const tail = "整";
const map = new Map([
  ["0", "零"],
  ["1", "壹"],
  ["2", "贰"],
  ["3", "叁"],
  ["4", "肆"],
  ["5", "伍"],
  ["6", "陆"],
  ["7", "柒"],
  ["8", "捌"],
  ["9", "玖"],
]);
const [arr1, arr2] = readline().split(".");
const str2 = handleFrac(arr2);
function handleFrac(arr) {
  let str = "";
  if (arr[0] > 0) {
    str += `${map.get(arr[0])}角`;
  }
  if (arr[1] > 0) {
    str += `${map.get(arr[1])}分`;
  }
  return str;
}
const temp = [];
if (arr1 != 0) {
  handleInt(arr1);
}
function handleInt(arr) {
  const str = "";
  let i = arr.length - 1;
  let cur = [];
  let c = 0;
  while (i >= 0) {
    if (c < 3) {
      cur.unshift(arr[i]);
    } else if (c == 3) {
      cur.unshift(arr[i]);
      temp.unshift(cur);
      cur = [];
      c = -1;
    }
    if (i == 0 && cur.length) {
      temp.unshift(cur);
    }
    c++;
    i--;
  }
}
function handlefour(arr) {
  let str = "";
  if (arr[0] > 0) {
    str += `${map.get(arr[0])}仟`;
  }
  if (arr[1] > 0) {
    str += `${map.get(arr[1])}佰`;
  } else if (arr[1] == 0) {
    str += `零`;
  }
  if (arr[2] > 0) {
    str += `${map.get(arr[2]) == "壹" ? "" : map.get(arr[2])}拾`;
  } else if (arr[2] == 0 && str[str.length - 1] != "零") {
    str += `零`;
  }
  if (arr[3] > 0) {
    str += `${map.get(arr[3])}`;
  }
  return str;
}
const subArr = ["元", "万", "亿"];
str1 = handleTemp(temp);
function handleTemp(arr) {
  let str = "";
  let i = arr.length - 1;
  while (i >= 0) {
    str = `${handlefour(arr[i].join("").padStart(4, "null"))}${
      subArr[arr.length - i - 1]
    }${str}`;
    i--;
  }
  return str;
}
if (str2) {
  console.log(head + str1 + str2);
} else {
  console.log(head + str1 + "整");
}
