import React, { useState, useContext } from "react";

import { FirestoreContext } from "../context/firestore";

import { RecipeCardGrid } from "../components";

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

  const recipeId =
    subPage !== SUB_PAGES.MY_MEALS ? getRecipeId(recipe?.uri) : null;
  const setIsSaved = (recipeId) => savedRecipesIds.includes(recipeId);
  const isSaved = setIsSaved(recipeId);

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
      {page === PAGES.SEARCH && (
        <Grid recipe={recipe}>
          <RecipeCardGrid.FooterView
            title="View full recipe"
            onClick={() => setOpenRecipeModal(true)}
          >
            View Recipe
          </RecipeCardGrid.FooterView>

          <RecipeCardGrid.FooterAdd
            title="Save recipe"
            saved={isSaved}
            onClick={() =>
              isSaved ? removeRecipe(recipeId) : saveRecipe(recipeId, recipe)
            }
          >
            {isSaved ? "Saved" : "Save"}
          </RecipeCardGrid.FooterAdd>
        </Grid>
      )}

      {view === VIEW.GRID && subPage === SUB_PAGES.SAVED_RECIPES && (
        <Grid recipe={recipe}>
          <RecipeCardGrid.FooterView
            title="View full recipe"
            onClick={() => setOpenRecipeModal(true)}
          >
            View Recipe
          </RecipeCardGrid.FooterView>

          <RecipeCardGrid.FooterRemove
            title="Remove recipe"
            onClick={() => setOpenRemoveDialog(true)}
          >
            Delete
          </RecipeCardGrid.FooterRemove>
        </Grid>
      )}

      {view === VIEW.GRID && subPage === SUB_PAGES.MY_MEALS && (
        <Grid recipe={recipe}>
          <RecipeCardGrid.FooterEdit
            title="Edit meal"
            onClick={() => setOpenEditMealForm(true)}
          >
            Edit Meal
          </RecipeCardGrid.FooterEdit>

          <RecipeCardGrid.FooterRemove
            title="Remove meal"
            onClick={() => setOpenRemoveDialog(true)}
          >
            Delete
          </RecipeCardGrid.FooterRemove>
        </Grid>
      )}

      {view === VIEW.LIST && (
        <List
          recipe={recipe}
          setOpenModal={
            subPage === SUB_PAGES.SAVED_RECIPES
              ? setOpenRecipeModal
              : setOpenEditMealForm
          }
          removeRecipe={
            subPage === SUB_PAGES.SAVED_RECIPES ? removeRecipe : removeMeal
          }
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
