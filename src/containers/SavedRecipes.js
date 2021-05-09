import React, { useContext } from "react";
import { FirestoreContext } from "../context/firestore";

import { RecipeCard } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { getRecipeId } from "../helpers/recipes";

export function SavedRecipesContainer({ uid, savedRecipes }) {
  return (
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
  );
}
