const reverseText = require("./reverse");

test("reverses a non-empty string", () => {
  const originalText = "Hello, World!";
  const reversedText = "World! Hello,";
  expect(reverseText(originalText)).toBe(reversedText);
});

test("throws an error for an empty string", () => {
  const emptyText = "";
  expect(() => reverseText(emptyText)).toThrowError("text is empty");
});

test("reverses a string with multiple words", () => {
  const originalText = "Find new way";
  const reversedText = "way new Find";
  expect(reverseText(originalText)).toBe(reversedText);
});
