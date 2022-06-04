const str = readline();
let val = 0;
checkLen(str.length);

function checkLen(len) {
  if (len <= 4) {
    val += 5;
  } else if (4 < len && len < 8) {
    val += 10;
  } else {
    val += 25;
  }
}
let letterAdd = 0;
checkLetter(str);

function checkLetter(str) {
  let i = 0;
  let up = false;
  let low = false;
  while (i < str.length && (!up || !low)) {
    if (!low && str[i] >= "a" && str[i] <= "z") {
      low = true;
    }
    if (!up && str[i] >= "A" && str[i] <= "Z") {
      up = true;
    }
    i++;
  }
  if ((up && !low) || (low && !up)) {
    letterAdd = 1;
    val += 10;
  } else if (up && low) {
    letterAdd = 2;
    val += 20;
  }
}
let numAdd = 0;
checkNum(str);

function checkNum(str) {
  let i = 0;
  let count = 0;
  while (count < 2 && i < str.length) {
    if (str[i] >= "0" && str[i] <= "9") {
      count++;
    }
    i++;
  }
  if (count == 1) {
    val += 10;
    numAdd = 1;
  } else if (count > 1) {
    val += 20;
    numAdd = 1;
  }
}
const symbolStr = `!\"#$%&'()*+,-./:;<=>?@[]^_` + "`{|}~";
let symbolAdd = 0;
checkSymbol(str);

function checkSymbol(str) {
  let i = 0;
  let count = 0;
  while (count < 2 && i < str.length) {
    if (symbolStr.indexOf(str[i]) != -1) {
      count++;
    }
    i++;
  }
  if (count == 1) {
    val += 10;
    symbolAdd = 1;
  } else if (count > 1) {
    val += 25;
    symbolAdd = 1;
  }
}
extraAdd();

function extraAdd() {
  if (letterAdd && numAdd && !symbolAdd) {
    val += 2;
  } else if (letterAdd == 1 && numAdd && symbolAdd) {
    val += 3;
  } else if (letterAdd == 2 && numAdd && symbolAdd) {
    val += 5;
  }
}

if (val >= 90) {
  console.log("VERY_SECURE");
} else if (val >= 80) {
  console.log("SECURE");
} else if (val >= 70) {
  console.log("VERY_STRONG");
} else if (val >= 60) {
  console.log("STRONG");
} else if (val >= 50) {
  console.log("AVERAGE");
} else if (val >= 25) {
  console.log("WEAK");
} else if (val >= 0) {
  console.log("VERY_WEAK");
}
