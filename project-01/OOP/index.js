console.log("Calculator Test");

const calc = require("./Calculator");

const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((item) => Number(item));
// const result = calc.calculate(operation, numbers);
const result = calc.init();
console.log(result);
