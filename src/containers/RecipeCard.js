import React, { useState, useContext } from "react";

import { FirestoreContext } from "../context/firestore";

import { RecipeCard } from "../components";
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
      <RecipeCard>
        {totalTime !== 0 && <RecipeCard.Time>{totalTime} mins</RecipeCard.Time>}
        <RecipeCard.Image src={image} />
        <RecipeCard.TextContainer>
          <RecipeCard.Title>{getLabel(label)}</RecipeCard.Title>
          <RecipeCard.EnergyContainer>
            <RecipeCard.Energy>
              <RecipeCard.EnergyTitle>Calories</RecipeCard.EnergyTitle>
              <RecipeCard.EnergyValue>
                {Math.floor(calories / recipe.yield)}
              </RecipeCard.EnergyValue>
            </RecipeCard.Energy>

            <RecipeCard.Energy>
              <RecipeCard.EnergyTitle>{protein.label}</RecipeCard.EnergyTitle>
              <RecipeCard.EnergyValue>
                {Math.floor(protein.quantity / recipe.yield)}
                {protein.unit}
              </RecipeCard.EnergyValue>
            </RecipeCard.Energy>

            <RecipeCard.Energy>
              <RecipeCard.EnergyTitle>{carbs.label}</RecipeCard.EnergyTitle>
              <RecipeCard.EnergyValue>
                {Math.floor(carbs.quantity / recipe.yield)}
                {carbs.unit}
              </RecipeCard.EnergyValue>
            </RecipeCard.Energy>

            <RecipeCard.Energy>
              <RecipeCard.EnergyTitle>{fat.label}</RecipeCard.EnergyTitle>
              <RecipeCard.EnergyValue>
                {Math.floor(fat.quantity / recipe.yield)}
                {fat.unit}
              </RecipeCard.EnergyValue>
            </RecipeCard.Energy>
          </RecipeCard.EnergyContainer>
        </RecipeCard.TextContainer>
        <RecipeCard.Footer>
          <RecipeCard.FooterView
            title="View full recipe"
            onClick={() => setOpenModal(true)}
          >
            View Recipe
          </RecipeCard.FooterView>
          {type === "search" && (
            <RecipeCard.FooterAdd
              title="Save recipe"
              saved={isSaved}
              onClick={() =>
                isSaved ? removeRecipe(recipeId) : saveRecipe(recipeId, recipe)
              }
            >
              {isSaved ? "Saved" : "Save"}
            </RecipeCard.FooterAdd>
          )}
          {type === "saved" && (
            <RecipeCard.FooterRemove
              title="Remove recipe"
              onClick={() => setOpenRemoveDialog(true)}
            >
              Delete
            </RecipeCard.FooterRemove>
          )}
        </RecipeCard.Footer>
      </RecipeCard>

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
