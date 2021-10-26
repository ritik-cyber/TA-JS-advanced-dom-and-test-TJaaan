const index = require("./index");

test(`fullName 'ritik' 'dhingra' is to equal 'ritik dhingra'`, () => {
  expect(index.fullName("ritik", "dhingra")).toBe("ritik dhingra");
});

test(`palindrome 'madam' is to equal 'true'`, () => {
  expect(index.palindrome("madam")).toBe(true);
});
