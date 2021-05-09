import React, { useState, useContext } from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";

import { FirestoreContext } from "../context/firestore";

import { RecipeCardList } from "../components";
import { RecipeModalContainer } from "../containers/RecipeModal";
import { RemoveRecipeDialogContainer } from "../containers/RemoveRecipeDialog";

import { getLabel, getRecipeId } from "../helpers/recipes";

export function RecipeCardListContainer({ recipe, uid }) {
  const { db } = useContext(FirestoreContext);

  const [openModal, setOpenModal] = useState(false);
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);

  const { label, calories, image, mealType, totalNutrients } = recipe;

  const recipeId = getRecipeId(recipe.uri);

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

  const macros = [
    totalNutrients.PROCNT,
    totalNutrients.CHOCDF,
    totalNutrients.FAT,
  ];

  return (
    <>
      <RecipeCardList.Frame>
        <RecipeCardList>
          <RecipeCardList.Image src={image} />

          <RecipeCardList.InfoContainer>
            <RecipeCardList.Title>
              {getLabel(label, "saved")}
            </RecipeCardList.Title>

            <RecipeCardList.Text>
              {Math.floor(calories / recipe.yield)} kcal per portion
            </RecipeCardList.Text>

            <RecipeCardList.BadgesGroup>
              {macros.map((macro) => (
                <RecipeCardList.Badge color="green" key={macro.label}>
                  <WhatshotIcon style={{ fontSize: 12 }} />
                  {Math.floor(macro.quantity / recipe.yield)}
                  {macro.unit} {macro.label}
                </RecipeCardList.Badge>
              ))}
              {mealType && (
                <RecipeCardList.Badge color="orange">
                  {mealType}
                </RecipeCardList.Badge>
              )}
            </RecipeCardList.BadgesGroup>
          </RecipeCardList.InfoContainer>
        </RecipeCardList>
        <RecipeCardList.ButtonGroup>
          <RecipeCardList.Button
            title="View full recipe"
            onClick={() => setOpenModal(true)}
          >
            View Recipe
          </RecipeCardList.Button>

          <RecipeCardList.Button
            title="Remove recipe"
            onClick={() => setOpenRemoveDialog(true)}
          >
            Delete
          </RecipeCardList.Button>
        </RecipeCardList.ButtonGroup>
      </RecipeCardList.Frame>

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
