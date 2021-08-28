export const getAllMeals = (recipes, meals) => {
  const recipesWIthoutMeals = recipes.filter(
    ({ id: idRecipe }) => !meals.some(({ id: idMeal }) => idRecipe === idMeal)
  );
  return [...recipesWIthoutMeals, ...meals];
};

export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const isInCaloriesLimit = (mealCalories, caloriesPortion) => {
  const limitUp = 1.1;
  const limitDown = 0.9;

  return (
    caloriesPortion * limitDown <= mealCalories &&
    mealCalories <= caloriesPortion * limitUp
  );
};

export const getRandomMeal = (mealArray, caloriesPerMeal) => {
  const meal = mealArray[getRandomNumber(mealArray.length)];

  const caloriesPerPortion = meal.calories / meal.yield;

  if (isInCaloriesLimit(caloriesPerPortion, caloriesPerMeal)) {
    return {
      meal,
      portions: 1,
      calories: Math.round(caloriesPerPortion),
    };
  } else {
    if (caloriesPerMeal > caloriesPerPortion) {
      const finalPortions =
        Math.round((caloriesPerMeal / caloriesPerPortion) * 4) / 4;
      const finalCalories = caloriesPerPortion * finalPortions;
      return {
        meal,
        portions: finalPortions,
        calories: Math.round(finalCalories),
      };
    } else {
      const finalPortions = caloriesPerMeal / caloriesPerPortion;
      const finalCalories = caloriesPerMeal;
      return {
        meal,
        portions: Math.round(finalPortions * 100) / 100,
        calories: Math.round(finalCalories),
      };
    }
  }
};
