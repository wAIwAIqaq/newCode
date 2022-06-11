const [m, n] = readline().split(" ").map(Number);
function getTypes(m, n) {
  if (m == 0 || n == 1) {
    return 1;
  } else if (m < n) {
    return getTypes(m, m);
  } else {
    return getTypes(m, n - 1) + getTypes(m - n, n);
  }
}
console.log(getTypes(m, n));
