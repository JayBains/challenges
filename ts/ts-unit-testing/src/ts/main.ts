import './../style.css';
// Imports

import { FoodType } from './Food';
import foodData from './foodData';
import { filterFoodByType, generateFoodHTML } from './foodUtilities.ts';

// HTML Elements
const form = document.querySelector<HTMLFormElement>('#food-form');
const sortBy = document.querySelector<HTMLSelectElement>('#sort-food');
const foodContainer = document.querySelector<HTMLElement>('#food-container');

if (!form || !sortBy || !foodContainer) {
    throw new Error(
        `There's an issue with the selector from any that are null: \nform: ${form}\nsortBy: ${sortBy}\nfoodContainer: ${foodContainer}`,
    );
}

// Functions
const submitForm = (event: SubmitEvent) => {
    // Stop form refreshing
    event.preventDefault();

    // Get the value of the select dropdown ("all", "junk", or "healthy")
    const selectedFood = sortBy!.value;

    // If selectedFood is not "all", it needs filtering
    let foodStockToDisplay = foodData;

    //
    if (selectedFood === FoodType.HEALTHY || selectedFood === FoodType.JUNK) {
        foodStockToDisplay = filterFoodByType(selectedFood, foodData);
    }

    // create and set HTML based on the food items
    foodContainer.innerHTML = generateFoodHTML(foodStockToDisplay);
};

// Event Listeners
form.addEventListener('submit', submitForm);

// Starting Logic
foodContainer.innerHTML = generateFoodHTML(foodData);
