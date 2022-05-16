const arr = readline().split("");
console.log(
  arr
    .sort((a, b) => {
      return a.charCodeAt() - b.charCodeAt();
    })
    .join("")
);
