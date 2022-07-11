/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const arr = [words[0]];
  let i = 1;
  while (i < words.length) {
    if (words[i].length + arr[arr.length - 1].length + 1 <= maxWidth) {
      arr[arr.length - 1] += ` ${words[i]}`;
    } else {
      arr.push(words[i]);
    }
    i++;
  }
  arr.forEach((item, index) => {
    if (index !== arr.length - 1) {
      arr[index] = addEmpty(arr[index], maxWidth);
    } else {
      arr[index] = arr[index].padEnd(maxWidth, " ");
    }
  });
  arr.forEach((item) => {
    console.log(item.length);
  });
  return arr;
};
function addEmpty(str, w) {
  let l = str.length;
  const arr = str.split("").filter((item) => {
    if (item == " ") {
      return item;
    }
  });
  if (!arr.length) {
    return str.padEnd(w, " ");
  }
  let i = 0;
  let c = w - l;
  let a = 0;
  while (a < c) {
    arr[i] += " ";
    a++;
    i++;
    if (i == arr.length) {
      i = 0;
    }
  }
  const res = [];
  const temp = str.split(" ");
  let j = 0;
  let m = arr.length + temp.length;
  while (j < m) {
    if (j % 2 == 0) {
      res.push(temp.shift());
    } else {
      res.push(arr.shift());
    }
    j++;
  }
  console.log(res.join("").length);
  return res.join("");
}
fullJustify(
  [
    "Science",
    "is",
    "what",
    "we",
    "understand",
    "well",
    "enough",
    "to",
    "explain",
    "to",
    "a",
    "computer.",
    "Art",
    "is",
    "everything",
    "else",
    "we",
    "do",
  ],
  20
);
