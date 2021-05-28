import React from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RecipeCardList } from "../components";

import { getLabel } from "../helpers/recipes";
import { PAGES, SUB_PAGES } from "../constants/recipes";

import food from "../images/food.png";

export function RecipeCardListContainer({
  recipe,
  setOpenModal,
  setOpenRemoveDialog,
  subPage,
}) {
  const { label, calories, image, mealType, totalNutrients } = recipe;

  const macros = [
    totalNutrients.PROCNT,
    totalNutrients.CHOCDF,
    totalNutrients.FAT,
  ];

  return (
    <RecipeCardList>
      <RecipeCardList.Image src={image || food} />

      <RecipeCardList.Frame>
        <RecipeCardList.InfoContainer>
          <RecipeCardList.Title>
            {getLabel(label, PAGES.SAVED)}
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
        <RecipeCardList.ButtonGroup>
          {subPage === SUB_PAGES.SAVED_RECIPES && (
            <RecipeCardList.Button
              title="View full recipe"
              onClick={() => setOpenModal(true)}
            >
              <FontAwesomeIcon icon="search" size="lg" />
            </RecipeCardList.Button>
          )}
          {subPage === SUB_PAGES.MY_MEALS && (
            <RecipeCardList.Button
              title="Edit meal"
              onClick={() => setOpenModal(true)}
            >
              <FontAwesomeIcon icon="pencil-alt" size="lg" />
            </RecipeCardList.Button>
          )}

          <RecipeCardList.Button
            title={`Remove ${
              subPage === SUB_PAGES.SAVED_RECIPES ? "recipe" : "meal"
            }`}
            onClick={() => setOpenRemoveDialog(true)}
          >
            <FontAwesomeIcon icon="trash-alt" size="lg" />
          </RecipeCardList.Button>
        </RecipeCardList.ButtonGroup>
      </RecipeCardList.Frame>
    </RecipeCardList>
  );
}
