import React from "react";
import styled from "styled-components/macro";

import { RecipeCardGrid } from "../components/";
import { RecipeCardList } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { getRecipeId } from "../helpers/recipes";
import { PAGES, SUB_PAGES, VIEW } from "../constants/recipes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export function SavedRecipesContainer({ uid, savedRecipes, view }) {
  return (
    <Wrapper>
      {view === VIEW.GRID && (
        <RecipeCardGrid.Container>
          {savedRecipes.map((recipe) => {
            return (
              <RecipeCardContainer
                key={getRecipeId(recipe.uri)}
                recipe={recipe}
                uid={uid}
                page={PAGES.SAVED}
                subPage={SUB_PAGES.SAVED_RECIPES}
                view={view}
              />
            );
          })}
        </RecipeCardGrid.Container>
      )}
      {view === VIEW.LIST && (
        <RecipeCardList.Container>
          {savedRecipes.map((recipe) => {
            return (
              <RecipeCardContainer
                key={getRecipeId(recipe.uri)}
                recipe={recipe}
                uid={uid}
                page={PAGES.SAVED}
                subPage={SUB_PAGES.SAVED_RECIPES}
                view={view}
              />
            );
          })}
        </RecipeCardList.Container>
      )}
    </Wrapper>
  );
}
