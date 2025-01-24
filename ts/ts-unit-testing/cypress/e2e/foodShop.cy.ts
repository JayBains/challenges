import { FoodType } from "../../src/ts/Food";

const filterFoodType = (type: FoodType) => {
  const dropdown = cy.get("#sort-food");
  dropdown.select(type);
  const submit = cy.get("button");
};

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("Testing E2E of Foodshop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should have a heading with correct text", () => {
    const heading = cy.get("h1");
    heading.should("contain", "Food Shop");
  });

  it("Should filter junk food", () => {
    filterFoodType(FoodType.JUNK);
    const foodContainer = cy.get("#foodContainer");
    foodContainer.children().should("have.length", 4);
    const salad = cy.contains("Salad");
    salad.should("exist");
  });
});
