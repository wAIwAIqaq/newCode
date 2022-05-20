readline();
while ((input = readline())) {
  arr = input.split("");
  const map = new Map();
  arr.forEach((item) => {
    if (map.get(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });
  const subArr = [...map].sort((a, b) => b[1] - a[1]);
  let c = 26;
  let res = 0;
  subArr.forEach((item) => {
    res += item[1] * c;
    c--;
  });
  console.log(res);
}
