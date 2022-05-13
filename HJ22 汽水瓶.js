let res = 0;
while ((input = readline())) {
  const num = input;
  if (num != 0) {
    toCacul(Number(num));
    console.log(res);
    res = 0;
  }
}
function toCacul(restEmpty) {
  if (restEmpty >= 3) {
    const count = Math.floor(restEmpty / 3);
    res += count;
    restEmpty = count + (restEmpty % 3);
    toCacul(restEmpty);
  } else if (restEmpty === 2) {
    res++;
  }
}
