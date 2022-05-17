const count = readline();
let smallCount = 1;
let middleCount = 0;
let bigCount = 0;
let i = 0;
while (i < count - 1) {
  const toMiddleCount = smallCount;
  bigCount = bigCount + middleCount;
  smallCount = bigCount;
  middleCount = toMiddleCount;
  i++;
}
console.log(smallCount + middleCount + bigCount);
