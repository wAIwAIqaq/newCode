const num = parseInt(readline());
let i = 0;
while (i <= num / 2) {
  const part1 = num / 2 - i;
  const part2 = num / 2 + i;
  if (isPrime(part1) && isPrime(part2)) {
    console.log(part1);
    console.log(part2);
    break;
  }
  i++;
}
function isPrime(num) {
  let i = 2;
  let flag = true;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      flag = false;
    }
    i++;
  }
  return flag;
}
