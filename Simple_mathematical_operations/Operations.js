// Addition function

function addition(...numbers) {
  for (const number of numbers) {
    if (typeof number !== "number") {
      throw new Error("all arguments must be number");
    }
  }
  return numbers.reduce((acc, value) => acc + value, 0);
}

//Subtraction function

function subtraction(...numbers) {
  for (const number of numbers) {
    if (typeof number !== "number") {
      throw new Error("all arguments must be number");
    }
  }
  let [minuend, ...subtrahends] = numbers;
  for (const number of subtrahends) {
    minuend -= number;
  }
  return minuend;
}

//Multiply function (for positive numbers)

function multiply(...numbers) {
  for (const number of numbers) {
    if (typeof number !== "number") {
      throw new Error("all arguments must be number");
    } else if (number <= 0) {
      throw new Error("all arguments must be positive number");
    }
  }

  return numbers.reduce((acc, value) => acc * value, 1);
}

//Divide function

function divide(...numbers) {
  for (const number of numbers) {
    if (typeof number !== "number") {
      throw new Error("all arguments must be number");
    } else if (numbers.indexOf(number) !== 0 && number === 0) {
      throw new Error("division by zero operation is not allowed");
    }
  }
  let [dividend, ...divisors] = numbers;

  return divisors.reduce((acc, value) => acc / value, dividend);
}

module.exports = { addition, subtraction, multiply, divide };
