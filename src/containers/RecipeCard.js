import React, { useState, useContext } from "react";

import { FirestoreContext } from "../context/firestore";

import { RecipeCardGrid } from "../components";
import { RecipeModalContainer } from "../containers/RecipeModal";
import { RemoveRecipeDialogContainer } from "../containers/RemoveRecipeDialog";

import { getLabel, getRecipeId } from "../helpers/recipes";

export function RecipeCardContainer({
  recipe,
  savedRecipesIds = [],
  uid,
  type,
}) {
  const { db } = useContext(FirestoreContext);

  const [openModal, setOpenModal] = useState(false);
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);

  const { label, calories, image, totalNutrients, totalTime, uri } = recipe;

  const recipeId = getRecipeId(uri);
  const isSaved = savedRecipesIds.indexOf(recipeId) !== -1;

  const saveRecipe = (recipeId, recipe) => {
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

  const { PROCNT: protein, CHOCDF: carbs, FAT: fat } = totalNutrients;

  return (
    <>
      <RecipeCardGrid>
        {totalTime !== 0 && (
          <RecipeCardGrid.Time>{totalTime} mins</RecipeCardGrid.Time>
        )}
        <RecipeCardGrid.Image src={image} />
        <RecipeCardGrid.TextContainer>
          <RecipeCardGrid.Title>{getLabel(label)}</RecipeCardGrid.Title>
          <RecipeCardGrid.EnergyContainer>
            <RecipeCardGrid.Energy>
              <RecipeCardGrid.EnergyTitle>Calories</RecipeCardGrid.EnergyTitle>
              <RecipeCardGrid.EnergyValue>
                {Math.floor(calories / recipe.yield)}
              </RecipeCardGrid.EnergyValue>
            </RecipeCardGrid.Energy>

            <RecipeCardGrid.Energy>
              <RecipeCardGrid.EnergyTitle>
                {protein.label}
              </RecipeCardGrid.EnergyTitle>
              <RecipeCardGrid.EnergyValue>
                {Math.floor(protein.quantity / recipe.yield)}
                {protein.unit}
              </RecipeCardGrid.EnergyValue>
            </RecipeCardGrid.Energy>

            <RecipeCardGrid.Energy>
              <RecipeCardGrid.EnergyTitle>
                {carbs.label}
              </RecipeCardGrid.EnergyTitle>
              <RecipeCardGrid.EnergyValue>
                {Math.floor(carbs.quantity / recipe.yield)}
                {carbs.unit}
              </RecipeCardGrid.EnergyValue>
            </RecipeCardGrid.Energy>

            <RecipeCardGrid.Energy>
              <RecipeCardGrid.EnergyTitle>
                {fat.label}
              </RecipeCardGrid.EnergyTitle>
              <RecipeCardGrid.EnergyValue>
                {Math.floor(fat.quantity / recipe.yield)}
                {fat.unit}
              </RecipeCardGrid.EnergyValue>
            </RecipeCardGrid.Energy>
          </RecipeCardGrid.EnergyContainer>
        </RecipeCardGrid.TextContainer>
        <RecipeCardGrid.Footer>
          <RecipeCardGrid.FooterView
            title="View full recipe"
            onClick={() => setOpenModal(true)}
          >
            View Recipe
          </RecipeCardGrid.FooterView>
          {type === "search" && (
            <RecipeCardGrid.FooterAdd
              title="Save recipe"
              saved={isSaved}
              onClick={() =>
                isSaved ? removeRecipe(recipeId) : saveRecipe(recipeId, recipe)
              }
            >
              {isSaved ? "Saved" : "Save"}
            </RecipeCardGrid.FooterAdd>
          )}
          {type === "saved" && (
            <RecipeCardGrid.FooterRemove
              title="Remove recipe"
              onClick={() => setOpenRemoveDialog(true)}
            >
              Delete
            </RecipeCardGrid.FooterRemove>
          )}
        </RecipeCardGrid.Footer>
      </RecipeCardGrid>

      <RecipeModalContainer
        open={openModal}
        setOpen={setOpenModal}
        recipe={recipe}
      />

      <RemoveRecipeDialogContainer
        recipeId={recipeId}
        label={getLabel(label, "saved")}
        open={openRemoveDialog}
        handleRemoveDialogClose={handleRemoveDialogClose}
        removeRecipe={removeRecipe}
      />
    </>
  );
}
