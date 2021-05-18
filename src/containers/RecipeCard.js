import React, { useState, useContext } from "react";

import { FirestoreContext } from "../context/firestore";

import { RecipeCardGridContainer as Grid } from "../containers/RecipeCardGrid";
import { RecipeCardListContainer as List } from "../containers/RecipeCardList";
import { MealFormContainer } from "../containers/MealForm";
import { RecipeModalContainer } from "../containers/RecipeModal";
import { RemoveRecipeDialogContainer } from "../containers/RemoveRecipeDialog";
import { RemoveMealDialogContainer } from "../containers/RemoveMealDialog";

import { getLabel, getRecipeId } from "../helpers/recipes";
import { PAGES, SUB_PAGES, VIEW } from "../constants/recipes";

export function RecipeCardContainer({
  recipe,
  savedRecipesIds = [],
  uid,
  page,
  subPage,
  view,
}) {
  const { db } = useContext(FirestoreContext);

  const [openRecipeModal, setOpenRecipeModal] = useState(false);
  const [openEditMealForm, setOpenEditMealForm] = useState(false);
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);

  const setIsSaved = (recipeId) => savedRecipesIds.includes(recipeId);

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

  const removeMeal = (mealId) => {
    db.collection("meals")
      .doc(uid)
      .collection("userMeals")
      .doc(mealId)
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
          recipeId={getRecipeId(recipe.uri)}
          page={page}
          setOpenModal={setOpenRecipeModal}
          isSaved={setIsSaved(getRecipeId(recipe.uri))}
          saveRecipe={saveRecipe}
          removeRecipe={removeRecipe}
          setOpenRemoveDialog={setOpenRemoveDialog}
        />
      )}
      {view === VIEW.LIST && subPage === SUB_PAGES.SAVED_RECIPES && (
        <List
          recipe={recipe}
          setOpenModal={setOpenRecipeModal}
          removeRecipe={removeRecipe}
          setOpenRemoveDialog={setOpenRemoveDialog}
          subPage={subPage}
        />
      )}

      {view === VIEW.LIST && subPage === SUB_PAGES.MY_MEALS && (
        <List
          recipe={recipe}
          setOpenModal={setOpenEditMealForm}
          removeRecipe={removeMeal}
          setOpenRemoveDialog={setOpenRemoveDialog}
          subPage={subPage}
        />
      )}

      <MealFormContainer
        open={openEditMealForm}
        setOpen={setOpenEditMealForm}
        uid={uid}
        meal={recipe}
        formType="edit"
      />

      <RecipeModalContainer
        open={openRecipeModal}
        setOpen={setOpenRecipeModal}
        recipe={recipe}
      />

      {subPage === SUB_PAGES.SAVED_RECIPES && (
        <RemoveRecipeDialogContainer
          recipeId={getRecipeId(recipe.uri)}
          label={getLabel(recipe.label, PAGES.SAVED)}
          open={openRemoveDialog}
          handleRemoveDialogClose={handleRemoveDialogClose}
          removeRecipe={removeRecipe}
        />
      )}

      {subPage === SUB_PAGES.MY_MEALS && (
        <RemoveMealDialogContainer
          mealId={recipe.id}
          label={recipe.label}
          open={openRemoveDialog}
          handleRemoveDialogClose={handleRemoveDialogClose}
          removeMeal={removeMeal}
        />
      )}
    </>
  );
}
