import { FoodType, Food } from "./Food";
import foodStock from "./foodData";
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
  test("Should return a correct output when given a valid input", () => {
    const output = capitalizeString("croissant");
    expect(output).not.toBe("Pain Au Chocolat");
  });
});

describe("testing correct food type", () => {
  const mockData: Food[] = [
    { img: "🍕", name: "pizza", foodType: FoodType.JUNK, rating: 10 },
    { img: "🥗", name: "salad", foodType: FoodType.HEALTHY, rating: 4 },
    { img: "🍟", name: "fries", foodType: FoodType.JUNK, rating: 3 },
  ];

  test("Should be junk", () => {
    const junkFood = [
      { img: "🍕", name: "pizza", foodType: FoodType.JUNK, rating: 10 },
      { img: "🍔", name: "burger", foodType: FoodType.JUNK, rating: 7 },
      { img: "🍟", name: "fries", foodType: FoodType.JUNK, rating: 3 },
      { img: "🌭", name: "hot dog", foodType: FoodType.JUNK, rating: 3 },
    ];
    const inputStock = foodStock;
    const foodType = "junk" as FoodType;
    const output = filterFoodByType(foodType, inputStock);
    expect(output).toEqual(junkFood);
  });

  test("Should be healthy", () => {
    const healthyFood = [
      { img: "🥗", name: "salad", foodType: FoodType.HEALTHY, rating: 4 },
      { img: "🥙", name: "pita", foodType: FoodType.HEALTHY, rating: 6 },
      { img: "🥪", name: "sandwich", foodType: FoodType.HEALTHY, rating: 2 },
      { img: "🌯", name: "burrito", foodType: FoodType.HEALTHY, rating: 9 },
      { img: "🥣", name: "soup", foodType: FoodType.HEALTHY, rating: 1 },
    ];
    const inputStock = foodStock;
    const foodType = "healthy" as FoodType;
    const output = filterFoodByType(foodType, inputStock);
    expect(output).toEqual(healthyFood);
  });
});
