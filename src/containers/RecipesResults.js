import React from "react";
import { Recipe } from "../components";

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

        const getLabel = (label) => {
          const labelWithoutHyphen = label.replace(" - ", " ");
          const labelWithoutRecipe = labelWithoutHyphen.replace(
            /\brecipes?\b/gi,
            ""
          );

          const labelArray = labelWithoutRecipe.split(" ");

          if (labelArray.length >= 4) {
            return labelArray
              .slice(0, 4)
              .join(" ")
              .concat("...")
              .replace(" ...", "...");
          } else {
            return labelWithoutRecipe.replace(" ...", "...");
          }
        };

        const recipeId = recipe.uri.split("_")[1];

        return (
          <Recipe key={recipeId}>
            {recipe.totalTime !== 0 ? (
              <Recipe.Time>{recipe.totalTime} mins</Recipe.Time>
            ) : null}
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
