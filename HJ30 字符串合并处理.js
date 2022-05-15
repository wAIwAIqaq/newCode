const input = "Eqr v9oEb12U2ur4xu7rd931G1f50qDo";
// step 1
const str = input.replace(" ", "");
// step 2
const arr = str.split("");
const oddArr = [];
const evenArr = [];
let flag = true;
arr.forEach((item) => {
  if (flag) {
    oddArr.push(item);
  } else {
    evenArr.push(item);
  }
  flag = !flag;
});

const oddArrSort = oddArr.sort();
const evenArrSort = evenArr.sort();
flag = true;
const subArr = new Array(oddArr.length + evenArr.length);
for (let i = 0; i < subArr.length; i++) {
  if (flag) {
    subArr[i] = oddArrSort.shift();
  } else {
    subArr[i] = evenArrSort.shift();
  }
  flag = !flag;
}
// step3
console.log(subArr);
const transArr = subArr.map((item) => {
  let num = item - 0;
  const arr = [];
  if (item.toLowerCase() >= "a" && item.toLowerCase() <= "z") {
    num = item.charCodeAt() - 88;
  }
  const temp = num.toString(2).split("").reverse();
  console.log(temp);
  let i = 0;
  while (i < 4) {
    if (temp[i]) {
      arr.push(temp[i]);
    } else {
      arr.push("0");
    }
    i++;
  }
  return parseInt(`${arr.join("")}`, 2)
    .toString(16)
    .toUpperCase();
});
console.log(transArr.join(""));
// 8084842CAE9B9G7D7BUFooqqrrrvuxu
// 8084842CAE9298C5C337EE995557B0B
console.log(("G".charCodeAt() - 88).toString(2));
console.log(parseInt(10100, 2).toString(16));
