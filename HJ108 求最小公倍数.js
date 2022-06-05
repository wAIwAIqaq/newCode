const [val1, val2] = readline().split(" ").map(Number);
let max = 0;
let min = 0;
if (val1 > val2) {
  max = val1;
  min = val2;
} else {
  max = val2;
  min = val1;
}
if (max % min == 0) {
  console.log(max);
} else {
  let res = max * min;
  let i = 0;
  const arr = [];
  while (i < min) {
    if (max % i == 0 && min % i == 0) {
      arr.push(i);
    }
    i++;
  }
  arr.forEach((item) => {
    res /= item;
  });
  console.log(res);
}
