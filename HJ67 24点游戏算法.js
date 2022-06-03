const input = readline()
  .split(" ")
  .map((item) => {
    return Number(item);
  });
let res = false;
function get24(cur, arr) {
  if (arr.length === 0 && cur == 24) {
    res = true;
  } else if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      let subArr = arr.slice();
      subArr.splice(i, 1);
      get24(cur + arr[i], subArr);
      get24(cur - arr[i], subArr);
      get24(cur * arr[i], subArr);
      get24(cur / arr[i], subArr);
    }
  }
}
get24(0, input);
console.log(res);
