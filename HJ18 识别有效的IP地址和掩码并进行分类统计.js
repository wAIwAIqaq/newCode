const arr = new Array(6).fill(0);
while ((line = readline())) {
  const firstArr = line.split("~")[0].split(".");
  const secondStr = line.split("~")[1].split(".");
  handle(firstArr, secondStr, 1, 126, 0);
  handle(firstArr, secondStr, 128, 191, 1);
  handle(firstArr, secondStr, 192, 223, 2);
  handle(firstArr, secondStr, 224, 239, 3);
  handle(firstArr, secondStr, 240, 255, 4);
}
console.log(arr.join(" "));
function handle(firstArr, secondStr, l, r, index) {
  let flag = false;
  if (
    firstArr[0] >= l &&
    firstArr[0] <= r &&
    secondStr[0] >= l &&
    secondStr[0] <= r
  ) {
    for (let i = 1; i < 4; i++) {
      if (
        firstArr[i] < 255 &&
        firstArr[i] > 0 &&
        secondStr[i] < 255 &&
        secondStr[i] > 0
      ) {
        flag = true;
      } else {
        arr[5]++;
      }
    }
  } else {
    arr[5]++;
  }
  if (firstArr.join("") < secondStr.join("")) {
    flag = false;
    arr[index]++;
  }
  if (flag) arr[index]++;
}
