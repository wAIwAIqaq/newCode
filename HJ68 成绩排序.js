const count = readline();
const flag = readline();
const arr = [];
let i = 0;
while ((input = readline())) {
  const name = input.split(" ")[0];
  const val = Number(input.split(" ")[1]);
  arr.push([name, val, i]);
  i++;
}
const res = arr.sort((a, b) => {
  if (flag == 0) {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] === b[1]) {
      return a[2] - b[2];
    } else {
      return 1;
    }
  } else {
    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] === b[1]) {
      return a[2] - b[2];
    } else {
      return -1;
    }
  }
});
res.forEach((item) => {
  console.log(`${item[0]} ${item[1]}`);
});
