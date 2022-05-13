const str = "021Abc9Abc1";
for (let i = 1; i < str.length - 3; i++) {
  let temp = `${str[i - 1]}${str[i]}${str[i + 1]}`;
  const restArr = str.slice(i + 1, str.length);
  const flag = restArr.indexOf(temp) !== -1;
  console.log(temp, restArr, flag);
}
