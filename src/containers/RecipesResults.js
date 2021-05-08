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
      {recipesData?.hits?.map(({ recipe }) => (
        <RecipeCardContainer
          key={getRecipeId(recipe.uri)}
          recipe={recipe}
          handleAddButton={handleAddButton}
          handleRemoveButton={handleRemoveButton}
          savedRecipesIds={savedRecipesIds}
        />
      ))}
    </RecipeCard.Container>
  );
}
