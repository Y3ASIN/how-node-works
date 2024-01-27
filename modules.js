// console.log(arguments);
// console.log(require("module").wrapper);

// module.export
const Calculator = require("./test-modules/test-module-1");
const calc1 = new Calculator();
console.log(calc1.addition(12, 24));

//exports
// const calc2 = require("./test-module-2");
const { addition, multiply, divide } = require("./test-modules/test-module-2");
console.log(addition(11, 1));
console.log(multiply(11, 2));
console.log(divide(11, 3));

// caching
require("./test-modules/test-module-3")();
require("./test-modules/test-module-3")();
require("./test-modules/test-module-3")();
