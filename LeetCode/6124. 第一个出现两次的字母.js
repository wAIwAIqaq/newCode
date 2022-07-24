/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let arr = [];
  let i = 0;
  while (i < s.length) {
    if (arr.includes(s[i])) {
      return s[i];
    } else {
      arr.push(s[i]);
    }
    i++;
  }
};
console.log(repeatedCharacter('abccbaacz'))