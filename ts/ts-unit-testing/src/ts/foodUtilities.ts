import { Food, FoodType } from './Food';

/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} string - The string to be capitalized.
 * @returns {string} The capitalized string.
 */
export const capitalizeString = (string: string): string => {
    const words = string.split(' ');
    const capitalisedWords = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    });

    return capitalisedWords.join(' ');
};

/**
 * Filters an array of Food objects by a specific type.
 * @param {FoodType} type - The type of food to filter by.
 * @param {Food[]} foodArray - The array of Food objects to filter.
 * @returns {Food[]} An array of Food objects that match the specified type.
 */
export const filterFoodByType = (type: FoodType, foodArray: Food[]): Food[] => {
    const filteredArray = foodArray.filter((food) => {
        return food.foodType === type;
    });

    return filteredArray;
};

/**
 * Generates a HTML string for an array of Food objects.
 * @param {Food[]} foodArray - The array of Food objects to generate HTML for.
 * @returns {string} A string of HTML representing the Food objects.
 */
export const generateFoodHTML = (foodArray: Food[]): string => {
    const foodHtml = foodArray.map((food) => {
        const name = capitalizeString(food.name);
        return `<div class="${food.foodType}"><p>${food.img}</p><p>${name}</p></div>`;
    });

    return foodHtml.join('');
};

/**
 * Sorts an array of Food objects by their rating in descending order.
 * @param {Food[]} foodArray - The array of Food objects to sort.
 * @returns {Food[]} A new array of Food objects sorted by rating in descending order.
 */
export const sortByRating = (foodArray: Food[]): Food[] => {
    return [...foodArray].sort((a, b) => b.rating - a.rating);
};
