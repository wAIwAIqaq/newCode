const num = readline();
if (num < 2) {
  console.log(-1);
}
const sub = (num - 2) % 4;
switch (sub) {
  case 0:
    console.log(2);
    break;
  case 1:
    console.log(3);
    break;
  case 2:
    console.log(2);
    break;
  case 4:
    console.log(4);
    break;
  default:
    break;
}
