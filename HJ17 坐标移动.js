const p = [0, 0];
arr = "A10;S20;W10;D30;X;A1A;B10A11;;A10;".split(";");
let i = 0;
while (i < arr.length) {
  let t = arr[i][0];
  let val = arr[i].slice(1, arr[i].length);
  if (val == val - 0) {
    val = val - 0;
    switch (t) {
      case "A":
        p[0] -= val;
        break;
      case "D":
        p[0] += val;
        break;
      case "W":
        p[1] += val;
        break;
      case "S":
        p[1] -= val;
        break;
      default:
        break;
    }
  }
  i++;
}
console.log(`${p[0]},${p[1]}`);
