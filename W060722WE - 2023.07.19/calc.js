// 2.
// create a program using nodejs
// the program should receive the following pattern [+-*/] {number} ...
// example + 5 5 5 555 5 4 87 8484 878 2248 ... => 12,276
// and print the result of the operation between all the numbers
// (script2.js)

// BONUS
// thorw an error in case the pattern is not matched

function baseOperationFn(operationFn) {
  return (...numbers) => {
    const [firstTerm, ...terms] = numbers;
    return terms.reduce(operationFn, firstTerm);
  };
}

const OPERATIONS = {
  "+": baseOperationFn((acc, curr) => acc + curr),
  "-": baseOperationFn((acc, curr) => acc - curr),
  x: baseOperationFn((acc, curr) => acc * curr),
  "/": baseOperationFn((acc, curr) => acc / curr),
};

const ALLOWED_OPERATIONS = Object.keys(OPERATIONS);

const [, , operator, ...numbers] = process.argv;

const normalizedNumbers = numbers.map(Number);

if (normalizedNumbers.some(isNaN)) {
  throw new Error("all must be numbers");
}

if (!ALLOWED_OPERATIONS.includes(operator)) {
  throw new Error(`operator must be one of ${ALLOWED_OPERATIONS.join(", ")}`);
}

console.log(`${normalizedNumbers.join(` ${operator} `)}`);

console.log(`result: ${OPERATIONS[operator](...normalizedNumbers)}`);
