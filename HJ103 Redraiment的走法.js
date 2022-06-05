// readline();
// 0 1背包问题
// const input =
//   "317 211 180 187 104 285 63 117 320 35 288 299 235 282 105 231 253 74 143 148 77 249 310 137 191 184 88 8 194 12 117 108 260 313 114 261 60 226 133 61 146 297 291 13 198 286 254 96 135 48 135 307 23 155 203 258 168 42 301 45 164 193 26 290 280 172 94 230 156 36 250 174 47 188 148 138 194 89 71 119 218 325 136 63 271 210 320 309 "
//     .split(" ")
//     .map(Number);
// let count = 0;
// stepIn(input);
// function stepIn(arr, step = 1, pre = 0) {
//   if (arr.length == 0) {
//     return;
//   }
//   const rest = arr.slice(1, arr.length);
//   if (arr[0] > pre) {
//     // 不下脚
//     console.log(rest, step, pre);
//     stepIn(rest, step, pre);
//     // 下脚
//     step = step + 1;
//     count = Math.max(count, step);
//     console.log(rest, step, pre);
//     stepIn(rest, step, arr[0]);
//   } else {
//     // 不下脚
//     console.log(rest, step, pre);
//     stepIn(rest, step, pre);
//   }
// }
// console.log(count - 1);
readline();
const input = readline().split(" ").map(Number);
const arr = [];
input.forEach((item, index) => {
  let curStep = 0;
  for (let i = 0; i < index; i++) {
    if (input[i] < item && arr[i] > curStep) {
      curStep = arr[i];
    }
  }
  arr.push(curStep + 1);
});
console.log(Math.max(...arr));
