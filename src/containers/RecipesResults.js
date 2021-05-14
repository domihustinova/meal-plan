import React from "react";
import { RecipeCardGrid } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { getRecipeId } from "../helpers/recipes";
import { PAGES, VIEW } from "../constants/recipes";

export function RecipesResultsContainer({ recipesData, savedRecipesIds, uid }) {
  return (
    <RecipeCardGrid.Container>
      {recipesData?.hits?.map(({ recipe }) => {
        return (
          <RecipeCardContainer
            key={getRecipeId(recipe.uri)}
            recipe={recipe}
            uid={uid}
            savedRecipesIds={savedRecipesIds}
            page={PAGES.SEARCH}
            view={VIEW.GRID}
          />
        );
      })}
    </RecipeCardGrid.Container>
  );
}
