const [money, count] = readline().split(" ").map(Number);
// 购物单
const list = [];
let i = 0;
// 18000 30
// 100 3 0
// 400 5 0
// 1300 5 1
// 1400 2 2
// 500 2 0
// 800 2 0
// 1400 5 0
// 300 5 0
// 1400 3 0
// 500 2 0
// 1800 4 0
// 400 5 9
// 1300 5 9
// 1400 3 0
// 500 2 0
// 800 2 0
// 1400 5 0
// 300 4 0
// 1400 3 0
// 500 2 0
// 1800 2 0
// 400 5 20
// 1300 5 20
// 1400 3 0
// 500 2 0
// 800 5 0
// 1400 5 0
// 300 5 0
// 1400 3 27
// 500 2 27
// ---------
// 500 500 1
// 800 2000 undefined
// 900 2500 undefined
// 1200 4000 undefined
// 400 1600 2
// 200 1000 5
// 700 3000 undefined
// 600 2200 undefined
// 1100 4200 undefined
// 400 1600 7
// 320 640 8
// 410 1230 9
// 8200
let mainList = [];
let subList = [];
while (i < count) {
  const [price, val, type] = readline().split(" ").map(Number);
  if (type == 0) {
    mainList.push({
      price,
      fine: price * val,
      index: i + 1,
    });
  } else {
    subList.push({
      price,
      fine: price * val,
      index: type,
    });
  }
  i++;
}
mainList.forEach((mainItem) => {
  const group = [];
  subList.forEach((subItem) => {
    if (subItem.index == mainItem.index) {
      group.push(subItem);
    }
  });
  list.push(mainItem);
  if (group.length) {
    list.push({
      price: mainItem.price + group[0].price,
      fine: mainItem.fine + group[0].fine,
      index: mainItem.index,
    });
    if (group.length == 1) return;
    list.push({
      price: mainItem.price + group[1].price,
      fine: mainItem.fine + group[1].fine,
      index: mainItem.index,
    });
    list.push({
      price: mainItem.price + group[0].price + group[1].price,
      fine: mainItem.fine + group[0].fine + group[1].fine,
      index: mainItem.index,
    });
  }
});
let maxFine = 0;
shop(list, money);
// 01 背包
function shop(restList, restMoney, curFine = 0, indexList) {
  if (maxFine <= curFine) {
    maxFine = curFine;
  }
  if (restList.length) {
    // 不买这组
    shop(restList.slice(1, restList.length), restMoney, curFine, indexList);
    // 买这件组
    if (restMoney >= restList[0].price && !indexList.find(restList[0].index)) {
      indexList.push(restList[0].index);
      shop(
        restList.slice(1, restList.length),
        restMoney - restList[0].price,
        curFine + restList[0].fine,
        indexList
      );
    }
  } else {
    return;
  }
}
console.log(maxFine);
