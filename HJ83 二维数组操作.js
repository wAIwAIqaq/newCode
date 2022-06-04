while ((input1 = readline())) {
  input1 = input1.split(" ").map(Number);
  let m = input1[0];
  let n = input1[1];
  if (m < 0 || m > 9 || n > 9 || n < 0) {
    console.log(-1);
    m = m > 9 ? 9 : m;
    n = n > 9 ? 9 : n;
  } else {
    console.log(0);
  }
  const [x1, y1, x2, y2] = readline().split(" ").map(Number);
  if (
    x1 < 0 ||
    x1 > m - 1 ||
    x2 < 0 ||
    x2 > m - 1 ||
    y1 < 0 ||
    y1 > n - 1 ||
    y2 < 0 ||
    y2 > n - 1
  ) {
    console.log(-1);
  } else {
    console.log(0);
  }
  const input3 = parseInt(readline());
  if (input3 < 0 || input3 > m - 1) {
    console.log(-1);
  } else {
    if (m + 1 > 9) {
      console.log(-1);
    } else {
      console.log(0);
    }
  }
  const input4 = parseInt(readline());
  if (input4 < 0 || input4 > n - 1) {
    console.log(-1);
  } else {
    if (n + 1 > 9) {
      console.log(-1);
    } else {
      console.log(0);
    }
  }
  const [x3, y3] = readline().split(" ").map(Number);
  if (x3 < 0 || x3 > m - 1 || y3 < 0 || y3 > n - 1) {
    console.log(-1);
  } else {
    console.log(0);
  }
}
