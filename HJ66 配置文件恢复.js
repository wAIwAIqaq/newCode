while ((input = readline())) {
  const arr = input.split(" ");
  let res = [];
  if ("reset".indexOf(arr[0]) === 0) {
    if (arr[1] && "board".indexOf(arr[1]) === 0) {
      res.push("board fault");
    } else if (!arr[1]) {
      res.push("reset what");
    }
  }
  if ("board".indexOf(arr[0]) === 0) {
    if (arr[1] && "add".indexOf(arr[1]) === 0) {
      res.push("where to add");
    } else if (arr[1] && "delete".indexOf(arr[1]) === 0) {
      res.push("no board at all");
    }
  }
  if ("reboot".indexOf(arr[0]) === 0) {
    if (arr[1] && "backplane".indexOf(arr[1]) === 0) {
      res.push("impossible");
    }
  }
  if ("backplane".indexOf(arr[0]) === 0) {
    if (arr[1] && "abort".indexOf(arr[1]) === 0) {
      res.push("install first");
    }
  }
  if (res.length == 1) {
    console.log(res[0]);
  } else {
    console.log("unknown command");
  }
}
