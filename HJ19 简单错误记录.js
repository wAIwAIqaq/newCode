let arr = new Array(9);
while ((str = readline())) {
  const strArr = str.split("\\");
  const fileNameAndline = strArr[strArr.length - 1];
  const fileName = fileNameAndline.split(" ")[0];
  const line = fileNameAndline.split(" ")[1];
  arr.forEach((item, index) => {
    const count = item.split(" ")[2] || 0;
    if (item === `${fileName} ${line}`) {
      if (arr.length === 9) {
        arr = [`${fileName} ${line} ${count}`, ...arr].slice(9, 1);
      } else {
        arr[index - 1] = `${fileName} ${line} ${count + 1}`;
      }
    } else {
      arr[arr.length - count - 1] = `${fileName} ${line} ${count}`;
    }
  });
}
for (let i = arr.length; i > 0; i--) {
  if (arr[i] !== "") {
    console.log(arr[i]);
  }
}
