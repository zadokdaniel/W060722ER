const calcOperators = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  x: (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
};

const ALLOWED_OPERATORS = Object.keys(calcOperators);

const [, , num1, operator, num2, ...rest] = process.argv;

const num1Normalized = Number(num1);
const num2Normalized = Number(num2);

try {
  validate(num1Normalized, operator, num2Normalized);

  const operationFn = calcOperators[operator];
  const equation = `${num1Normalized} ${operator} ${num2Normalized} = ${operationFn(
    num1Normalized,
    num2Normalized
  )}`;

  console.log(equation);
} catch (err) {
  console.error("ERROR: ", err.message);
}

function validate(num1, operator, num2) {
  if (
    rest.length ||
    isNaN(num1Normalized) ||
    isNaN(num2Normalized) ||
    !ALLOWED_OPERATORS.includes(operator)
  ) {
    throw new Error(
      `must provide "number operator number" pattern. allowed operators are only ${ALLOWED_OPERATORS.join(
        ", "
      )}`
    );
  }
}
