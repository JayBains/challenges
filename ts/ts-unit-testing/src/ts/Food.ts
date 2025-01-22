export type Food = {
  img: string;
  name: string;
  foodType: FoodType;
  rating: number;
};

export enum FoodType {
  JUNK = "junk",
  HEALTHY = "healthy",
}
