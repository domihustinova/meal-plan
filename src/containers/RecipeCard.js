import React, { useState, useContext } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { FirestoreContext } from "../context/firestore";

import { RecipeCard } from "../components";
import { RecipeModalContainer } from "../containers/RecipeModal";

import { getLabel, getRecipeId } from "../helpers/recipes";

export function RecipeCardContainer({
  recipe,
  savedRecipesIds = [],
  uid,
  type,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
  const { db } = useContext(FirestoreContext);

  const recipeId = getRecipeId(recipe.uri);
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

  const { PROCNT: protein, CHOCDF: carbs, FAT: fat } = recipe.totalNutrients;

  return (
    <>
      <RecipeCard>
        {recipe.totalTime !== 0 && (
          <RecipeCard.Time>{recipe.totalTime} mins</RecipeCard.Time>
        )}
        <RecipeCard.Image src={recipe.image} />
        <RecipeCard.TextContainer>
          <RecipeCard.Title>{getLabel(recipe.label)}</RecipeCard.Title>
          <RecipeCard.EnergyContainer>
            <RecipeCard.Energy>
              <RecipeCard.EnergyTitle>Calories</RecipeCard.EnergyTitle>
              <RecipeCard.EnergyValue>
                {Math.floor(recipe.calories / recipe.yield)}
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

      <Dialog
        open={openRemoveDialog}
        onClose={handleRemoveDialogClose}
        aria-labelledby="remove-recipe"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete recipe?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Recipe for {getLabel(recipe.label, "saved")} will be removed from
            your saved recipes. Do you wish to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveDialogClose} color="primary">
            Close
          </Button>
          <Button
            onClick={() => removeRecipe(recipeId)}
            color="primary"
            autoFocus
          >
            Delete recipe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
