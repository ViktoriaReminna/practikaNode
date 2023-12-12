class Calculator {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }
  init = () => this.calculate(this.operation, this.numbers);

  calculate = (operation, numbersArr) => {
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
}

const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((item) => Number(item));

module.exports = new Calculator(operation, numbers);
