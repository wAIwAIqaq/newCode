while ((str = readline())) {
  let res = "OK";
  if (str.length < 8) {
    res = "NG";
  } else {
    let types = new Array(4).fill(false);
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && i < str.length - 2) {
        let temp = `${str[i - 1]}${str[i]}${str[i + 1]}`;
        const restArr = str.slice(i + 1, str.length);
        const flag = restArr.indexOf(temp) !== -1;
        if (flag) {
          res = "NG";
        } else {
          if (arr[i] >= "a" && arr[i] <= "z") {
            types[0] = true;
          } else if (arr[i] >= "A" && arr[i] <= "Z") {
            types[1] = true;
          } else if (arr[i] >= "0" && arr[i] <= "9") {
            types[2] = true;
          } else {
            types[3] = true;
          }
        }
      } else if (arr[i] === " " || arr[i] === "\n") {
        res = "NG";
      } else {
        if (arr[i] >= "a" && arr[i] <= "z") {
          types[0] = true;
        } else if (arr[i] >= "A" && arr[i] <= "Z") {
          types[1] = true;
        } else if (arr[i] >= "0" && arr[i] <= "9") {
          types[2] = true;
        } else {
          types[3] = true;
        }
      }
    }
    let count = 0;
    types.forEach((item) => {
      if (item) {
        count++;
      }
    });
    if (count < 3) {
      res = "NG";
    }
  }
  console.log(res);
}
