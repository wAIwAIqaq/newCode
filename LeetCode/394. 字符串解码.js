/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let i = 0;
  let times = "";
  let res = "";
  while (i < s.length) {
    if (s[i] == Number(s[i])) {
      times += s[i];
    } else if (s[i] == "[") {
      stack.push({
        times: parseInt(times),
        str: res,
      });
      [times, res] = ["", ""];
    } else if (s[i] == "]") {
      const shallow = stack.pop();
      res = shallow.str + new Array(shallow.times).fill(res).join("");
    } else {
      res += s[i];
    }
    i++;
  }
  console.log(res);
};
decodeString("3[a]2[bc]");
