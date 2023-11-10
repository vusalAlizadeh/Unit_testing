const { addition, subtraction, multiply, divide } = require("./Operations");

// Addition function
test("adds two numbers", () => {
  expect(addition(2, 3)).toBe(5);
});

test("adds multiple numbers", () => {
  expect(addition(1, 2, 3, 4)).toBe(10);
});

test("throws an error for non-number arguments in addition", () => {
  expect(() => addition(1, "two")).toThrowError("all arguments must be number");
});

// Subtraction function
test("subtracts two numbers", () => {
  expect(subtraction(5, 3)).toBe(2);
});

test("subtracts multiple numbers", () => {
  expect(subtraction(10, 2, 3, 1)).toBe(4);
});

test("throws an error for non-number arguments in subtraction", () => {
  expect(() => subtraction(5, "two")).toThrowError(
    "all arguments must be number"
  );
});

// Multiply function
test("multiplies two numbers", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("multiplies multiple numbers", () => {
  expect(multiply(1, 2, 3, 4)).toBe(24);
});

test("throws an error for non-number arguments in multiplication", () => {
  expect(() => multiply(1, "two")).toThrowError("all arguments must be number");
});

test("throws an error for non-positive number arguments in multiplication", () => {
  expect(() => multiply(1, 2, 0)).toThrowError(
    "all arguments must be positive number"
  );
});

// Divide function
test("divides two numbers", () => {
  expect(divide(6, 3)).toBe(2);
});

test("divides multiple numbers", () => {
  expect(divide(24, 2, 3, 1)).toBe(4);
});

test("throws an error for non-number arguments in division", () => {
  expect(() => divide(6, "three")).toThrowError("all arguments must be number");
});

test("throws an error for division by zero", () => {
  expect(() => divide(10, 0)).toThrowError(
    "division by zero operation is not allowed"
  );
});
