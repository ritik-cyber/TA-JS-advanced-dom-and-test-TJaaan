const fullName = require("./index");

test(`fullName 'ritik' 'dhingra' is to equal 'ritik dhingra'`, () => {
  expect(fullName("ritik", "dhingra")).toBe("ritik dhingra");
});
