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
const mainMap = new Map();
while (i < count) {
  const [price, val, type] = readline().split(" ").map(Number);
  const fine = price * val;
  if (type == 0) {
    mainList.push({
      price,
      fine,
      index: i + 1,
    });
  } else {
    if (!mainMap.get(type)) {
      mainMap.set(type, [{ price, fine }]);
    } else {
      mainMap.get(type).push({ price, fine });
    }
  }
  i++;
}
[...mainMap].forEach((item) => {
  console.log(item[0]);
  [...item[1]].forEach((item1) => {
    console.log(item1.price, item1.fine);
  });
});
let maxFine = 0;
shop(mainList, money);
// 01 背包
function shop(restList, restMoney, curFine = 0) {
  if (maxFine <= curFine) {
    maxFine = curFine;
  }
  if (restList.length) {
    // 不买这组
    shop(restList.slice(1, restList.length), restMoney, curFine);
    // 买这件组
    if (restMoney >= restList[0].price) {
      shop(
        restList.slice(1, restList.length),
        restMoney - restList[0].price,
        curFine + restList[0].fine
      );
      // 如果有附件 就去买附件
      const subList = mainMap.get(restList[0].index);
      if (subList) {
        // 只有一件附件
        if (subList.length == 1) {
          if (restMoney - restList[0].price >= subList[0].price) {
            shop(
              restList,
              restMoney - restList[0].price - subList[0].price,
              curFine + restList[0].fine
            );
          }
        } else {
          // 买第一件附件
          if (restMoney - restList[0].price >= subList[0].price) {
            shop(
              restList,
              restMoney - restList[0].price - subList[0].price,
              curFine + restList[0].fine + subList[0].fine
            );
          }
          // 买第二件附件
          if (restMoney - restList[0].price >= subList[1].price) {
            shop(
              restList,
              restMoney - restList[0].price - subList[1].price,
              curFine + restList[0].fine + subList[1].fine
            );
          }
          // 买两件附件
          if (
            restMoney - restList[0].price >=
            subList[0].price + subList[1].price
          ) {
            shop(
              restList,
              restMoney -
                restList[1].price -
                subList[0].price -
                subList[1].price,
              curFine + restList[0].fine + subList[0].fine + subList[1].fine
            );
          }
        }
      }
    }
  } else {
    return;
  }
}
console.log(maxFine);
