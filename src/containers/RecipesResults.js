import React from "react";
import { RecipeCard } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { getRecipeId } from "../helpers/recipes";

export function RecipesResultsContainer({ recipesData, savedRecipesIds, uid }) {
  return (
    <RecipeCard.Container>
      {recipesData?.hits?.map(({ recipe }) => {
        return (
          <RecipeCardContainer
            key={getRecipeId(recipe.uri)}
            recipe={recipe}
            savedRecipesIds={savedRecipesIds}
            uid={uid}
            type="search"
          />
        );
      })}
    </RecipeCard.Container>
  );
}
