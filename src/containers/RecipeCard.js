import React, { useState } from "react";
import { RecipeCard } from "../components";
import { RecipeModalContainer } from "../containers/RecipeModal";

import { getLabel, getRecipeId } from "../helpers/recipes";

export function RecipeCardContainer({
  recipe,
  handleAddButton,
  handleRemoveButton,
}) {
  const [openModal, setOpenModal] = useState(false);

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
          <RecipeCard.FooterView onClick={() => setOpenModal(true)}>
            View Recipe
          </RecipeCard.FooterView>
          <RecipeCard.FooterAdd
            onClick={() => handleAddButton(getRecipeId(recipe.uri), recipe)}
          >
            +
          </RecipeCard.FooterAdd>
          <RecipeCard.FooterRemove
            onClick={() => handleRemoveButton(getRecipeId(recipe.uri))}
          >
            -
          </RecipeCard.FooterRemove>
        </RecipeCard.Footer>
      </RecipeCard>

      <RecipeModalContainer
        open={openModal}
        setOpen={setOpenModal}
        recipe={recipe}
      />
    </>
  );
}
