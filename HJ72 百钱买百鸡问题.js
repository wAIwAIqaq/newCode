let count = 0;
const arr = [];
for (let i = 0; i <= 100 / 5; i++) {
  for (let j = 0; j <= (100 - 5 * i) / 3; j++) {
    for (let k = 0; k <= (100 - 5 * i - 3 * j) * 3; k++) {
      if (5 * i + 3 * j + k / 3 === 100 && i + j + k === 100) {
        arr.push([i, j, k]);
      }
    }
  }
}
arr.forEach((item) => {
  console.log(item.join(" "));
});
