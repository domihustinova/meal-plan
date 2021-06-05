import React from "react";

import { RecipeCardGrid } from "../components";

import { getLabel } from "../helpers/recipes";

import food from "../images/food.png";

export function PlanCardContainer({ mealType, calories, portions, meal }) {
  const { label, image, totalNutrients, totalTime } = meal;

  const { PROCNT: protein, CHOCDF: carbs, FAT: fat } = totalNutrients;

  const isImageMissing = (image) => (image ? image.includes("svg") : true);

  return (
    <RecipeCardGrid>
      <RecipeCardGrid.MealType>{mealType}</RecipeCardGrid.MealType>
      <RecipeCardGrid.Image src={isImageMissing(image) ? food : image} />

      <RecipeCardGrid.TextContainer>
        <RecipeCardGrid.Title>{getLabel(label)}</RecipeCardGrid.Title>

        <RecipeCardGrid.EnergyContainer>
          <RecipeCardGrid.Energy>
            <RecipeCardGrid.EnergyTitle>Calories</RecipeCardGrid.EnergyTitle>
            <RecipeCardGrid.EnergyValue>{calories}</RecipeCardGrid.EnergyValue>
          </RecipeCardGrid.Energy>

          <RecipeCardGrid.Energy>
            <RecipeCardGrid.EnergyTitle>
              {protein.label}
            </RecipeCardGrid.EnergyTitle>
            <RecipeCardGrid.EnergyValue>
              {Math.floor((protein.quantity / meal.yield) * portions)}
              {protein.unit}
            </RecipeCardGrid.EnergyValue>
          </RecipeCardGrid.Energy>

          <RecipeCardGrid.Energy>
            <RecipeCardGrid.EnergyTitle>
              {carbs.label}
            </RecipeCardGrid.EnergyTitle>
            <RecipeCardGrid.EnergyValue>
              {Math.floor((carbs.quantity / meal.yield) * portions)}
              {carbs.unit}
            </RecipeCardGrid.EnergyValue>
          </RecipeCardGrid.Energy>

          <RecipeCardGrid.Energy>
            <RecipeCardGrid.EnergyTitle>{fat.label}</RecipeCardGrid.EnergyTitle>
            <RecipeCardGrid.EnergyValue>
              {Math.floor((fat.quantity / meal.yield) * portions)}
              {fat.unit}
            </RecipeCardGrid.EnergyValue>
          </RecipeCardGrid.Energy>
        </RecipeCardGrid.EnergyContainer>
      </RecipeCardGrid.TextContainer>
      <RecipeCardGrid.Footer></RecipeCardGrid.Footer>
    </RecipeCardGrid>
  );
}
