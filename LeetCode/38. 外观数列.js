/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n == 1) {
    return "1";
  }
  return toExplain(countAndSay(n - 1));
};
function toExplain(str) {
  const reg = /(\d)\1*/g;
  const arr = str.match(reg);
  return arr
    .map((item) => {
      return `${item.length}${item[0]}`;
    })
    .join();
}
countAndSay(5);
