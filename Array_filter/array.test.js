const arrayOfEvenNumbers = require("./array");

test("returns an array of even numbers", () => {
  expect(arrayOfEvenNumbers([1, 4, 6, 9])).toEqual([4, 6]);
});

test("returns an empty array for an input array with no even numbers", () => {
  expect(arrayOfEvenNumbers([1, 3, 5, 7])).toEqual([]);
});

test("throws an error when the array is empty", () => {
  expect(() => arrayOfEvenNumbers([])).toThrowError("array is empty");
});
