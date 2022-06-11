/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  if (num < 10) {
    return handle(num.toString(), "I", "V", "X");
  } else if (num >= 10 && num < 100) {
    return (
      handle(num.toString()[0], "X", "L", "C") +
      handle(num.toString()[1], "I", "V", "X")
    );
  } else if (num >= 100 && num < 1000) {
    return (
      handle(num.toString()[0], "C", "D", "M") +
      handle(num.toString()[1], "X", "L", "C") +
      handle(num.toString()[2], "I", "V", "X")
    );
  } else {
    return (
      handle(num.toString()[0], "M", "", "") +
      handle(num.toString()[1], "C", "D", "M") +
      handle(num.toString()[2], "X", "L", "C") +
      handle(num.toString()[3], "I", "V", "X")
    );
  }
  function handle(num, one, five, ten) {
    let str = "";
    switch (num) {
      case "1":
        str = one;
        break;
      case "2":
        str = one + one;
        break;
      case "3":
        str = one + one + one;
        break;
      case "4":
        str = one + five;
        break;
      case "5":
        str = five;
        break;
      case "6":
        str = five + one;
        break;
      case "7":
        str = five + one + one;
        break;
      case "8":
        str = five + one + one + one;
        break;
      case "9":
        str = one + ten;
        break;
      default:
        break;
    }
    return str;
  }
};
