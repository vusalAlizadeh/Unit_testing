const validateEmailAddress = require("./email");

test("validates a correct email address", () => {
  const validEmail = "test@example.com";
  expect(validateEmailAddress(validEmail)).toBe(`${validEmail} is valid`);
});

test('throws an error for an email address with no "@" symbol', () => {
  const invalidEmail = "testexample.com";
  expect(() => validateEmailAddress(invalidEmail)).toThrowError(
    "Email address is not valid"
  );
});

test("throws an error for an email address with consecutive dots", () => {
  const invalidEmail = "test@example..com";
  expect(() => validateEmailAddress(invalidEmail)).toThrowError(
    "Email address is not valid"
  );
});

test("throws an error for an email address with a space", () => {
  const invalidEmail = "test @example.com";
  expect(() => validateEmailAddress(invalidEmail)).toThrowError(
    "Email address is not valid"
  );
});
