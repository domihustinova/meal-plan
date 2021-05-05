export const DIET_DATA = {
  balanced: "Balanced",
  "high-protein": "High-protein",
  "low-fat": "Low-fat",
  "low-carb": "Low-carb",
};

export const dietOptions = Object.keys(DIET_DATA).map((value) => ({
  label: DIET_DATA[value],
  value,
}));

export const MEAL_TYPE_DATA = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
  snack: "Snack",
};

export const mealTypeOptions = Object.keys(MEAL_TYPE_DATA).map((value) => ({
  label: MEAL_TYPE_DATA[value],
  value,
}));
