function toCacul(restEmpty, res) {
  if (restEmpty >= 3) {
    const count = Math.floor(restEmpty / 3);
    res += count;
    restEmpty -= count * 3;
    console.log(restEmpty, res);
    res += toCacul(restEmpty, res);
  } else if (restEmpty === 2) {
    res++;
  } else {
    return res;
  }
}
console.log(toCacul(3, 0));
