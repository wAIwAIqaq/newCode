const num = 6;
function mutlhandle(num) {
  if (num != 1) {
    return num * mutlhandle(num - 1);
  } else {
    return 1;
  }
}
console.log(mutlhandle(num));
