let flag = true;
let childStr = "";
const child = readline()
  .split(".")
  .map((item) => {
    if ((flag && parseInt(item) < 0) || parseInt(item) > 255) {
      flag = false;
    }
    childStr += `${parseInt(item).toString(2).padStart(8, "0")}`;
    return parseInt(item);
  });
//  判断子网合法
// 1.255.255.0
// 187.39.235.7
// 219.79.189.231
// 2
// 实际结果 2 ，需要输出 1
if (
  childStr
    .slice(childStr.indexOf("0"), childStr.length)
    .split("")
    .some((item) => {
      return item == 1;
    })
) {
  flag = false;
}

const ip1 = readline()
  .split(".")
  .map((item) => {
    if ((flag && parseInt(item) < 0) || parseInt(item) > 255) {
      flag = false;
    }
    return parseInt(item);
  });
const ip2 = readline()
  .split(".")
  .map((item) => {
    if ((flag && parseInt(item) < 0) || parseInt(item) > 255) {
      flag = false;
    }
    return parseInt(item);
  });
let res1 = "";
let res2 = "";
child.forEach((item, index) => {
  res1 += `${item & ip1[index]} `;
  res2 += `${item & ip2[index]} `;
});

if (res1 === res2 && flag) {
  console.log(0);
} else if (!flag) {
  console.log(1);
} else {
  console.log(2);
}
