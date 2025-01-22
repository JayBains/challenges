import { Food, FoodType } from "./Food";

const foodStock: Food[] = [
  { img: "🍕", name: "pizza", foodType: FoodType.JUNK, rating: 10 },
  { img: "🍔", name: "burger", foodType: FoodType.JUNK, rating: 7 },
  { img: "🍟", name: "fries", foodType: FoodType.JUNK, rating: 3 },
  { img: "🌭", name: "hot dog", foodType: FoodType.JUNK, rating: 3 },
  { img: "🥗", name: "salad", foodType: FoodType.HEALTHY, rating: 4 },
  { img: "🥙", name: "pita", foodType: FoodType.HEALTHY, rating: 6 },
  { img: "🥪", name: "sandwich", foodType: FoodType.HEALTHY, rating: 2 },
  { img: "🌯", name: "burrito", foodType: FoodType.HEALTHY, rating: 9 },
  { img: "🥣", name: "soup", foodType: FoodType.HEALTHY, rating: 1 },
];

export default foodStock;
