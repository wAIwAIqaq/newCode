const input = parseInt(readline());
let i = 1;
let res = 0;
while (i <= input) {
  const limit = [1, i];
  const arr = [1, i];
  let left = 1;
  let right = limit[1];
  while (left <= Math.sqrt(i)) {
    if (i % left === 0) {
      limit[1] = i / left;
      limit[0] = left;
      arr.push(limit[0]);
      arr.push(limit[1]);
    }
    left++;
  }
  let count = 0;
  const subArr = [...new Set(arr)];
  subArr.forEach((item) => {
    count += item;
  });
  if (count === 2 * i) {
    res++;
  }
  i++;
}

console.log(res);
