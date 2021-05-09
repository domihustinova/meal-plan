import React from "react";

import { RecipeCardGrid } from "../components";

import { getLabel } from "../helpers/recipes";

export function RecipeCardGridContainer({
  recipe,
  recipeId,
  page,
  setOpenModal,
  isSaved,
  saveRecipe,
  removeRecipe,
  setOpenRemoveDialog,
}) {
  const { label, calories, image, totalNutrients, totalTime } = recipe;

  const { PROCNT: protein, CHOCDF: carbs, FAT: fat } = totalNutrients;

  return (
    <RecipeCardGrid>
      {totalTime !== 0 && (
        <RecipeCardGrid.Time>{totalTime} mins</RecipeCardGrid.Time>
      )}
      <RecipeCardGrid.Image src={image} />
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
      <RecipeCardGrid.Footer>
        <RecipeCardGrid.FooterView
          title="View full recipe"
          onClick={() => setOpenModal(true)}
        >
          View Recipe
        </RecipeCardGrid.FooterView>
        {page === "search" && (
          <RecipeCardGrid.FooterAdd
            title="Save recipe"
            saved={isSaved}
            onClick={() =>
              isSaved ? removeRecipe(recipeId) : saveRecipe(recipeId, recipe)
            }
          >
            {isSaved ? "Saved" : "Save"}
          </RecipeCardGrid.FooterAdd>
        )}
        {page === "saved" && (
          <RecipeCardGrid.FooterRemove
            title="Remove recipe"
            onClick={() => setOpenRemoveDialog(true)}
          >
            Delete
          </RecipeCardGrid.FooterRemove>
        )}
      </RecipeCardGrid.Footer>
    </RecipeCardGrid>
  );
}
