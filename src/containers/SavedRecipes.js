import React from "react";

import { RecipeCard } from "../components/";
import { RecipeCardList } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";
import { RecipeCardListContainer } from "../containers/RecipeCardList";

import { getRecipeId } from "../helpers/recipes";

export function SavedRecipesContainer({ uid, savedRecipes, view }) {
  return (
    <>
      {view === "grid" && (
        <RecipeCard.Container>
          {savedRecipes.map((recipe) => {
            return (
              <RecipeCardContainer
                key={getRecipeId(recipe.uri)}
                recipe={recipe}
                uid={uid}
                type="saved"
              />
            );
          })}
        </RecipeCard.Container>
      )}
      {view === "list" && (
        <RecipeCardList.Container>
          {savedRecipes.map((recipe) => {
            return (
              <RecipeCardListContainer
                key={getRecipeId(recipe.uri)}
                recipe={recipe}
                uid={uid}
                type="saved"
              />
            );
          })}
        </RecipeCardList.Container>
      )}
    </>
  );
}
