import {
  capitalizeString,
  filterFoodByType,
  generateFoodHTML,
  sortByRating,
} from "./foodUtilities";

// describe(name, fn)
// creates a block that groups together several related tests

describe("Testing capitalizeString", () => {
  // test(name, fn, timeout)
  // first arguement is the test name, second is the function to test expected outcomes

  test("should capitalise", () => {
    const output = capitalizeString("croissant");
    // When testing, often need to check that values meet certain conditions.
    // expect() gives you access to a number of matchers that let you validate things
    expect(output).toBe("Croissant");
    // use .toBe to compare primitive values or to check referential identity of object instances.
    // It calls Object to compare values which is even better for testing than === strict.
  });
});
