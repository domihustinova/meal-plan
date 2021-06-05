import React, { useState, useEffect } from "react";

import { RecipeCardGrid } from "../components";
import { PlanCardContainer } from "../containers/PlanCard";

import { getGoalData } from "../helpers/calories";
import { getAllMeals, getRandomMeal } from "../helpers/plan";

export default function Editor({
  savedRecipes,
  savedMeals,
  measurementsData,
  caloriesData,
}) {
  const [goalData, setGoalData] = useState({});
  const [mealsData, setMealsData] = useState([]);
  const [plan, setPlan] = useState();

  useEffect(() => {
    if (caloriesData?.goalsData) {
      setGoalData(getGoalData(caloriesData, measurementsData.goal));
    }
  }, [measurementsData, caloriesData]);

  useEffect(() => {
    if (savedRecipes && savedMeals) {
      setMealsData(getAllMeals(savedRecipes, savedMeals));
    }
  }, [savedRecipes, savedMeals]);

  const generatePlan = () => {
    const tdee = goalData.tdee;

    const breakfastArray = mealsData.filter(
      (meal) => meal.mealType[0] === "breakfast"
    );
    const lunchArray = mealsData.filter(
      (meal) => meal.mealType[0] === "lunch/dinner"
    );
    const dinnerArray = mealsData.filter(
      (meal) => meal.mealType[0] === "lunch/dinner"
    );

    const breakfast = getRandomMeal(breakfastArray, tdee * 0.3);
    const lunch = getRandomMeal(lunchArray, tdee * 0.35);
    const dinner = getRandomMeal(dinnerArray, tdee * 0.35);

    return [
      { mealType: "breakfast", ...breakfast },
      { mealType: "lunch", ...lunch },
      { mealType: "dinner", ...dinner },
    ];
  };

  return (
    <div>
      <button onClick={() => setPlan(generatePlan)}>Click me</button>
      <div>{goalData.tdee}</div>
      <ul>
        <li>Breakfast: {Math.round(goalData.tdee * 0.3)}</li>
        <li>Lunch: {Math.round(goalData.tdee * 0.35)}</li>
        <li>Dinner: {Math.round(goalData.tdee * 0.35)}</li>
      </ul>
      {plan && (
        <RecipeCardGrid.Container>
          {plan.map(({ mealType, calories, portions, meal }) => (
            <PlanCardContainer
              key={mealType}
              mealType={mealType}
              calories={calories}
              portions={portions}
              meal={meal}
            />
          ))}
        </RecipeCardGrid.Container>
      )}
    </div>
  );
}
