const count = readline();
const input = readline().split(" ");
const flag = readline();
console.log(
  input
    .sort((a, b) => {
      if (flag == 0) {
        return a - b;
      } else {
        return b - a;
      }
    })
    .join(" ")
);
