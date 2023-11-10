const calculateDay = require("./date");

test("calculates the difference in days between two valid dates", () => {
  const date1 = "30.11.2023";
  const date2 = "18.12.2023";
  expect(calculateDay(date1, date2)).toBe(18);
});

test("throws an error for invalid month in the first date", () => {
  const date1 = "30.13.2023";
  const date2 = "18.12.2023";
  expect(() => calculateDay(date1, date2)).toThrowError("invalid month");
});

test("throws an error for invalid day in the second date", () => {
  const date1 = "30.11.2023";
  const date2 = "32.12.2023";
  expect(() => calculateDay(date1, date2)).toThrowError("invalid day");
});
