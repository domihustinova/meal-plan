import { getOptions } from "../helpers/data";

export const MEAL_TYPE_DATA = {
  breakfast: "Breakfast",
  "lunch/dinner": "Lunch/Dinner",
  snack: "Snack",
};

export const mealTypeOtions = getOptions(MEAL_TYPE_DATA);
