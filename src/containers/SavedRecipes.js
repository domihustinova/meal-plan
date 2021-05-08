import React, { useContext } from "react";
import { FirestoreContext } from "../context/firestore";

import { RecipeCard } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { getRecipeId } from "../helpers/recipes";

export function SavedRecipesContainer({ user, savedRecipes }) {
  const { db } = useContext(FirestoreContext);
  const uid = user.uid;

  const handleRemoveButton = (recipeId) => {
    db.collection("recipes")
      .doc(uid)
      .collection("userRecipes")
      .doc(recipeId)
      .delete()
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <RecipeCard.Container>
      {savedRecipes.map((recipe) => {
        const recipeId = getRecipeId(recipe.uri);
        return (
          <RecipeCardContainer
            key={getRecipeId(recipe.uri)}
            recipe={recipe}
            handleRemoveButton={handleRemoveButton}
          >
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
