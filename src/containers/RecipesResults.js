import React from "react";
import { RecipeCard } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { getRecipeId } from "../helpers/recipes";

export function RecipesResultsContainer({
  recipesData,
  handleAddButton,
  handleRemoveButton,
  savedRecipesIds,
}) {
  return (
    <RecipeCard.Container>
      {recipesData?.hits?.map(({ recipe }) => {
        const recipeId = getRecipeId(recipe.uri);

        return (
          <RecipeCardContainer
            key={getRecipeId(recipe.uri)}
            recipe={recipe}
            handleAddButton={handleAddButton}
            handleRemoveButton={handleRemoveButton}
            savedRecipesIds={savedRecipesIds}
          >
            <RecipeCard.FooterAdd
              saved={savedRecipesIds.indexOf(recipeId) !== -1}
              onClick={() => handleAddButton(recipeId, recipe)}
            >
              +
            </RecipeCard.FooterAdd>
            <RecipeCard.FooterRemove
              onClick={() => handleRemoveButton(recipeId)}
            >
              -
            </RecipeCard.FooterRemove>
          </RecipeCardContainer>
        );
      })}
    </RecipeCard.Container>
  );
}
