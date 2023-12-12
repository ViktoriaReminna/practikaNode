const calculate = (operation, numbersArr) => {
  switch (operation) {
    case "sum":
      return numbersArr.reduce((acc, item) => acc + item);
    case "sub":
      return numbersArr.reduce((acc, item) => acc - item);
    case "mult":
      return numbersArr.reduce((acc, item) => acc * item);
    case "div":
      return numbersArr.reduce((acc, item) => acc / item);
    default:
      return "unknown operation type";
  }
};

module.exports = calculate;
