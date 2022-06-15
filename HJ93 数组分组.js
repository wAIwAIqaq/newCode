const count = readline();
let arr = readline().split(" ").map(Number);
let i = 0;
let val1 = 0;
let val2 = 0;
let sub = 0;
let flag = false;
while (i < arr.length) {
  sub += arr[i];
  if (arr[i] % 5 == 0) {
    val1 += arr[i];
    arr[i] = 0;
  } else if (arr[i] % 3 == 0) {
    val2 += arr[i];
    arr[i] = 0;
  }
  i++;
}
if (val1 == 0 && val2 == 0 && sub == 0) {
  flag = true;
}
arr = arr.filter((item) => {
  if (item != 0) return item;
});

checkEqual(arr);
function checkEqual(arr, val = 0) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] + val + val1 == sub / 2 || arr[i] + val + val2 == sub / 2) {
      flag = true;
      return;
    } else if (arr.length > 1) {
      val += arr[i];
      checkEqual(arr.splice(i, 1), val);
    } else {
      return;
    }
  }
}
console.log(flag);
