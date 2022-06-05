const num = readline();
const persons = readline().split(" ");
const personsMap = new Map();
persons.forEach((item) => {
  personsMap.set(item, 0);
});
personsMap.set("Invalid", 0);
const count = parseInt(readline());
const votes = readline().split(" ");
let i = 0;
while (i < count) {
  if (personsMap.get(votes[i]) || personsMap.get(votes[i]) == 0) {
    personsMap.set(votes[i], personsMap.get(votes[i]) + 1);
  } else {
    personsMap.set("Invalid", personsMap.get("Invalid") + 1);
  }
  i++;
}
[...personsMap].forEach((item) => {
  console.log(`${item[0]} : ${item[1]}`);
});
