import React from "react";

import { RecipeCardGrid } from "../components";

import { getLabel } from "../helpers/recipes";

import food from "../images/food.png";

export function RecipeCardGridContainer({ recipe, children }) {
  const { label, calories, image, totalNutrients, totalTime } = recipe;

  const { PROCNT: protein, CHOCDF: carbs, FAT: fat } = totalNutrients;

  const isImageMissing = (image) => (image ? image.includes("svg") : true);

  return (
    <RecipeCardGrid>
      {totalTime !== 0 && totalTime && (
        <RecipeCardGrid.Time>{totalTime} mins</RecipeCardGrid.Time>
      )}
      <RecipeCardGrid.Image src={isImageMissing(image) ? food : image} />
      <RecipeCardGrid.TextContainer>
        <RecipeCardGrid.Title>{getLabel(label)}</RecipeCardGrid.Title>
        <RecipeCardGrid.EnergyContainer>
          <RecipeCardGrid.Energy>
            <RecipeCardGrid.EnergyTitle>Calories</RecipeCardGrid.EnergyTitle>
            <RecipeCardGrid.EnergyValue>
              {Math.floor(calories / recipe.yield)}
            </RecipeCardGrid.EnergyValue>
          </RecipeCardGrid.Energy>

          <RecipeCardGrid.Energy>
            <RecipeCardGrid.EnergyTitle>
              {protein.label}
            </RecipeCardGrid.EnergyTitle>
            <RecipeCardGrid.EnergyValue>
              {Math.floor(protein.quantity / recipe.yield)}
              {protein.unit}
            </RecipeCardGrid.EnergyValue>
          </RecipeCardGrid.Energy>

          <RecipeCardGrid.Energy>
            <RecipeCardGrid.EnergyTitle>
              {carbs.label}
            </RecipeCardGrid.EnergyTitle>
            <RecipeCardGrid.EnergyValue>
              {Math.floor(carbs.quantity / recipe.yield)}
              {carbs.unit}
            </RecipeCardGrid.EnergyValue>
          </RecipeCardGrid.Energy>

          <RecipeCardGrid.Energy>
            <RecipeCardGrid.EnergyTitle>{fat.label}</RecipeCardGrid.EnergyTitle>
            <RecipeCardGrid.EnergyValue>
              {Math.floor(fat.quantity / recipe.yield)}
              {fat.unit}
            </RecipeCardGrid.EnergyValue>
          </RecipeCardGrid.Energy>
        </RecipeCardGrid.EnergyContainer>
      </RecipeCardGrid.TextContainer>
      <RecipeCardGrid.Footer>{children}</RecipeCardGrid.Footer>
    </RecipeCardGrid>
  );
}
