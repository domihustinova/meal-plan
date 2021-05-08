import React from "react";
import { Recipe } from "../components";

import { getLabel, getRecipeId } from "../helpers/recipes";

export function RecipesResultsContainer({
  recipesData,
  handleAddButton,
  handleRemoveButton,
}) {
  return (
    <Recipe.Container>
      {recipesData?.hits?.map(({ recipe }) => {
        const {
          PROCNT: protein,
          CHOCDF: carbs,
          FAT: fat,
        } = recipe.totalNutrients;

        const recipeId = getRecipeId(recipe.uri);

        return (
          <Recipe key={recipeId}>
            {recipe.totalTime !== 0 && (
              <Recipe.Time>{recipe.totalTime} mins</Recipe.Time>
            )}
            <Recipe.Image src={recipe.image} />
            <Recipe.TextContainer>
              <Recipe.Title>{getLabel(recipe.label)}</Recipe.Title>
              <Recipe.EnergyContainer>
                <Recipe.Energy>
                  <Recipe.EnergyTitle>Calories</Recipe.EnergyTitle>
                  <Recipe.EnergyValue>
                    {Math.floor(recipe.calories / recipe.yield)}
                  </Recipe.EnergyValue>
                </Recipe.Energy>

                <Recipe.Energy>
                  <Recipe.EnergyTitle>{protein.label}</Recipe.EnergyTitle>
                  <Recipe.EnergyValue>
                    {Math.floor(protein.quantity / recipe.yield)}
                    {protein.unit}
                  </Recipe.EnergyValue>
                </Recipe.Energy>

                <Recipe.Energy>
                  <Recipe.EnergyTitle>{carbs.label}</Recipe.EnergyTitle>
                  <Recipe.EnergyValue>
                    {Math.floor(carbs.quantity / recipe.yield)}
                    {carbs.unit}
                  </Recipe.EnergyValue>
                </Recipe.Energy>

                <Recipe.Energy>
                  <Recipe.EnergyTitle>{fat.label}</Recipe.EnergyTitle>
                  <Recipe.EnergyValue>
                    {Math.floor(fat.quantity / recipe.yield)}
                    {fat.unit}
                  </Recipe.EnergyValue>
                </Recipe.Energy>
              </Recipe.EnergyContainer>
            </Recipe.TextContainer>
            <Recipe.Footer>
              <Recipe.FooterView>View Recipe</Recipe.FooterView>
              <Recipe.FooterAdd
                onClick={() => handleAddButton(recipeId, recipe)}
              >
                +
              </Recipe.FooterAdd>
              <Recipe.FooterRemove onClick={() => handleRemoveButton(recipeId)}>
                -
              </Recipe.FooterRemove>
            </Recipe.Footer>
          </Recipe>
        );
      })}
    </Recipe.Container>
  );
}
