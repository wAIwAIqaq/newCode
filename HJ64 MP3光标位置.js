const len = readline();
const input = readline().split("");
const arr = [];
let i = 0;
while (i < len) {
  arr.push(i + 1);
  i++;
}
let cur = 0;
let win = [...arr.slice(0, 4)];
function moveTarget(op) {
  if (op === "U") {
    if (cur === 0) {
      if (win[0] === 1) {
        win = [...arr.slice(len - 4, len)];
        cur = win.length - 1;
      } else {
        win = win.map((item) => {
          return item - 1;
        });
      }
    } else {
      cur--;
    }
  } else {
    if (cur === win.length - 1) {
      if (win[win.length - 1] == len) {
        win = [...arr.slice(0, 4)];
        cur = 0;
      } else {
        win = win.map((item) => {
          return item + 1;
        });
      }
    } else {
      cur++;
    }
  }
}
input.forEach((item) => {
  moveTarget(item);
});
console.log(win.join(" "));
console.log(win[cur]);
