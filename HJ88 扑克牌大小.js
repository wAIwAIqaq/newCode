const [str1, str2] = readline().split("-");
const arr1 = str1.split(" ");
const arr2 = str2.split(" ");
if (isDoubleJoker(arr1) || isDoubleJoker(arr2)) {
  const res = isDoubleJoker(arr1) ? arr1 : arr2;
  console.log(res.join(" "));
} else {
  numList = "345678910";
  letterList = "JQKA";
  if (arr1.length === arr2.length) {
    if (arr1.length >= 1 && arr1.length <= 5) {
      console.log(compareSingle(arr1, arr2).join(" "));
    }
  } else {
    if (arr1.length === 4) {
      console.log(arr1.join(" "));
    } else if (arr2.length === 4) {
      console.log(arr2.join(" "));
    } else {
      console.log("ERROR");
    }
  }
}
function isDoubleJoker(arr) {
  if (arr.length == 2) {
    if (
      arr[0] == "joker" ||
      (arr[0] == "JOKER" && arr[1] == "joker") ||
      arr[1] == "JOKER"
    ) {
      return true;
    }
  }
}

function compareSingle(arr1, arr2) {
  return getSingleVal(arr1[0]) > getSingleVal(arr2[0]) ? arr1 : arr2;
}

function getSingleVal(str) {
  let val = numList.indexOf(str);
  if (letterList.indexOf(str) !== -1) {
    val = letterList.indexOf(str) + 8;
  }
  if (str == 2) {
    val = 12;
  } else if (str == "joker") {
    val = 13;
  } else if (str == "JOKER") {
    val = 14;
  }
  return val;
}
