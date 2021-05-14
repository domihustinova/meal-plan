import React, { useState, useContext } from "react";

import { FirestoreContext } from "../context/firestore";

import { RecipeCardGridContainer as Grid } from "../containers/RecipeCardGrid";
import { RecipeCardListContainer as List } from "../containers/RecipeCardList";
import { RecipeModalContainer } from "../containers/RecipeModal";
import { RemoveRecipeDialogContainer } from "../containers/RemoveRecipeDialog";

import { getLabel, getRecipeId } from "../helpers/recipes";
import { PAGES, VIEW } from "../constants/recipes";

export function RecipeCardContainer({
  recipe,
  savedRecipesIds = [],
  uid,
  page,
  view,
}) {
  const { db } = useContext(FirestoreContext);

  const [openModal, setOpenModal] = useState(false);
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);

  const recipeId = getRecipeId(recipe.uri);
  const isSaved = savedRecipesIds.indexOf(recipeId) !== -1;

  const saveRecipe = (recipeId, recipe) => {
    db.collection("recipes")
      .doc(uid)
      .collection("userRecipes")
      .doc(recipeId)
      .set(recipe)
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const removeRecipe = (recipeId) => {
    db.collection("recipes")
      .doc(uid)
      .collection("userRecipes")
      .doc(recipeId)
      .delete()
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const handleRemoveDialogClose = () => {
    setOpenRemoveDialog(false);
  };

  return (
    <>
      {view === VIEW.GRID && (
        <Grid
          recipe={recipe}
          recipeId={recipeId}
          page={page}
          setOpenModal={setOpenModal}
          isSaved={isSaved}
          saveRecipe={saveRecipe}
          removeRecipe={removeRecipe}
          setOpenRemoveDialog={setOpenRemoveDialog}
        />
      )}
      {view === VIEW.LIST && (
        <List
          recipe={recipe}
          setOpenModal={setOpenModal}
          removeRecipe={removeRecipe}
          setOpenRemoveDialog={setOpenRemoveDialog}
        />
      )}

      <RecipeModalContainer
        open={openModal}
        setOpen={setOpenModal}
        recipe={recipe}
      />

      <RemoveRecipeDialogContainer
        recipeId={recipeId}
        label={getLabel(recipe.label, PAGES.SAVED)}
        open={openRemoveDialog}
        handleRemoveDialogClose={handleRemoveDialogClose}
        removeRecipe={removeRecipe}
      />
    </>
  );
}
