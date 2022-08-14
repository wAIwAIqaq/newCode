/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  let stack = [1];
  let suffStack = [];
  let i = 0;
  while (i < pattern.length) {
    if (pattern[i] === "I") {
      stack = [...stack,...suffStack]
      suffStack = [];
      stack.push(i + 2);
    } else {
      suffStack.unshift(stack.pop());
      stack.push(i + 2);
    }
    i++;
  }
  return stack.concat(suffStack).join('');
};
console.log(smallestNumber((pattern = "DDD")));
