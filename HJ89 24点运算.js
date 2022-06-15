const arr = readline().split(" ");
if (arr.includes("joker") || arr.includes("JOKER")) {
  console.log("ERROR");
} else {
  const map = new Map([
    ["A", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
    ["10", 10],
    ["J", 11],
    ["Q", 12],
    ["K", 13],
  ]);
  let res = "NONE";
  let i = 0;
  while (i < 4) {
    const nextRest = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)];
    getVal(nextRest, map.get(arr[i]), arr[i]);
    i++;
  }
  console.log(res);
  function getVal(rest, val = 0, str = "") {
    if (val == 24 && rest.length == 0) {
      res = str;
      return;
    }
    if (rest.length) {
      let i = 0;
      while (i < rest.length) {
        const nextRest = [
          ...rest.slice(0, i),
          ...rest.slice(i + 1, rest.length),
        ];
        let curVal = val;
        curVal += map.get(rest[i]);
        getVal(nextRest, curVal, `${str}+${rest[i]}`);
        curVal = val;
        curVal -= map.get(rest[i]);
        getVal(nextRest, curVal, `${str}-${rest[i]}`);
        curVal = val;
        curVal *= map.get(rest[i]);
        getVal(nextRest, curVal, `${str}*${rest[i]}`);
        curVal = val;
        curVal /= map.get(rest[i]);
        curVal = Math.floor(curVal);
        getVal(nextRest, curVal, `${str}/${rest[i]}`);
        curVal = val;
        i++;
      }
    } else {
      return;
    }
  }
}
