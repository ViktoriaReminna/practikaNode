// node calc.js sum 25 25 25
// node calc.js sub 100 50 25
// node calc.js mult 100 2 2
// node calc.js div 200 2 2
// console.log(process.argv);
const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((item) => Number(item));
// console.log(operation);
// console.log(args);

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

const result = calculate(operation, numbers);
console.log(result);
