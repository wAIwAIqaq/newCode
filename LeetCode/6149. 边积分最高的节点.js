/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
  const edgeMap = new Map();
  let i = 0;
  let index = 0;
  let maxEdgeVal = -Infinity; 
  while (i < edges.length) {
    let key = edges[i];
    let val = i;
    if (edgeMap.get(key) === undefined) {
      edgeMap.set(key, val);
    } else {
      edgeMap.set(key, edgeMap.get(key) + val);
    }
    if(edgeMap.get(key) > maxEdgeVal){
        maxEdgeVal = edgeMap.get(key)
        index = key;
    }else if(edgeMap.get(key) === maxEdgeVal){
        index = Math.min(index,key)
    }
    i++;
  }
  return index
};
console.log(edgeScore([3,3,3,0]));
