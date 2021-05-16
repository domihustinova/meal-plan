export const MEAL_TYPE_DATA = {
  breakfast: "Breakfast",
  "lunch/dinner": "Lunch/Dinner",
  snack: "Snack",
};

export const mealTypeOtions = Object.keys(MEAL_TYPE_DATA).map((value) => ({
  label: MEAL_TYPE_DATA[value],
  value,
}));
