const str1 = readline();
const ipArr1 = str1.split(".").map((item) => {
  return parseInt(item).toString(2).padStart(8, "0");
});
console.log(parseInt(ipArr1.join(""), 2));
const str2 = readline();
const ipStr = parseInt(str2).toString(2).padStart(32, "0");
let res2 = "";
for (let i = 0; i < 4; i++) {
  const item = ipStr.slice(i * 8, (i + 1) * 8);
  if (i === 3) {
    res2 += `${parseInt(item, 2)}`;
  } else {
    res2 += `${parseInt(item, 2)}.`;
  }
}
console.log(res2);
