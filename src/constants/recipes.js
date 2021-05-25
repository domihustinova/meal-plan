import { getOptions } from "../helpers/data";

export const DIET_DATA = {
  balanced: "Balanced",
  "high-protein": "High-protein",
  "low-fat": "Low-fat",
  "low-carb": "Low-carb",
};

export const dietOptions = getOptions(DIET_DATA);

export const MEAL_TYPE_DATA = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
  snack: "Snack",
};

export const mealTypeOptions = getOptions(MEAL_TYPE_DATA);

export const PAGES = {
  SEARCH: "search",
  SAVED: "saved",
};

export const SUB_PAGES = {
  SAVED_RECIPES: "savedRecipes",
  MY_MEALS: "myMeals",
};

export const VIEW = {
  GRID: "grid",
  LIST: "list",
};
