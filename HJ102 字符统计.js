const map = new Map();
const input = readline().split("");
let i = 0;
while (i < input.length) {
  if (map.get(input[i]) || map.get(input[i]) === 0) {
    map.set(input[i], map.get(input[i]) + 1);
  } else {
    map.set(input[i], 0);
  }
  i++;
}
const res = [...map]
  .sort((a, b) => {
    if (a[1] - b[1] > 0) {
      return -1;
    } else if (a[1] == b[1]) {
      if (a[0] > b[0]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  })
  .map((item) => {
    return item[0];
  })
  .join("");

console.log(res);
