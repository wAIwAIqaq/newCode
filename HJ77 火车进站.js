const max = parseInt(readline());
const arr = readline().split(" ");
const paths = [];
stackHandler(arr);
function stackHandler(vals = [], inStack = [], outStack = []) {
  if (outStack.length === max) {
    paths.push(outStack.join(" "));
    return;
  }
  if (vals.length === max) {
    inStack.push(vals.shift());
    stackHandler(vals, inStack, outStack);
    return;
  }
  if (vals.length > 0) {
    const cur = vals.shift();
    inStack.push(cur);
    stackHandler(vals, inStack, outStack);
    inStack.pop();
    vals.unshift(cur);
  }
  if (inStack.length > 0) {
    const cur = inStack.pop();
    outStack.push(cur);
    stackHandler(vals, inStack, outStack);
    outStack.pop();
    inStack.push(cur);
  }
}
paths.sort().forEach((item) => {
  console.log(item);
});
