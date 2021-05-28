import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RecipeCardGrid } from "../components/";
import { RecipeCardList } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { getRecipeId } from "../helpers/recipes";
import { PAGES, SUB_PAGES, VIEW } from "../constants/recipes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewIconGroup = styled.div`
  margin-left: 36px;
`;

const ViewIcon = styled.span`
  color: #e69183;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: #eba796;
  }
`;

export function SavedRecipesContainer({
  uid,
  savedRecipes,
  view,
  handleViewSetting,
}) {
  return (
    <Wrapper>
      <ViewIconGroup>
        <ViewIcon title="List View">
          <FontAwesomeIcon
            icon="th-list"
            size="2x"
            onClick={() => handleViewSetting(VIEW.LIST)}
          />
        </ViewIcon>
        <ViewIcon title="Gallery View">
          <FontAwesomeIcon
            icon="th"
            size="2x"
            onClick={() => handleViewSetting(VIEW.GRID)}
          />
        </ViewIcon>
      </ViewIconGroup>
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
