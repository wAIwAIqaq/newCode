/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  let i = 0;
  while (i < strs.length) {
    const cur = strs[i].split("").sort().join("");
    if (map.get(cur) === undefined) {
      map.set(cur, [strs[i]]);
    } else {
      map.set(cur, [...map.get(cur), strs[i]]);
    }
    i++;
  }
  return [...map.values()];
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
