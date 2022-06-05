const input = readline().split(" ").map(Number);
let [m, n] = input;
let count = 0;
toMove([0, 0]);
function toMove(cur) {
  if (cur[0] == m && cur[1] == n) {
    count++;
  }
  if ((cur[0] < m && cur[1] <= n) || (cur[0] <= m && cur[1] < n)) {
    toMove([cur[0] + 1, cur[1]]);
    toMove([cur[0], cur[1] + 1]);
  }
}
console.log(count);
