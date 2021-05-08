import React, { useContext } from "react";
import { FirestoreContext } from "../context/firestore";

import { RecipeCard } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { getRecipeId } from "../helpers/recipes";

export function SavedRecipesContainer({ user, savedRecipes }) {
  const { db } = useContext(FirestoreContext);
  const uid = user.uid;
  const handleAddButton = (recipeId, recipe) => {
    db.collection("recipes")
      .doc(uid)
      .collection("userRecipes")
      .doc(recipeId)
      .set({
        ...recipe,
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

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
      {savedRecipes.map((recipe) => (
        <RecipeCardContainer
          key={getRecipeId(recipe.uri)}
          recipe={recipe}
          handleAddButton={handleAddButton}
          handleRemoveButton={handleRemoveButton}
        />
      ))}
    </RecipeCard.Container>
  );
}
