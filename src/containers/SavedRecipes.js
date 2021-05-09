import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RecipeCard } from "../components/";
import { RecipeCardList } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";
import { RecipeCardListContainer } from "../containers/RecipeCardList";

import { getRecipeId } from "../helpers/recipes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewIconGroup = styled.div`
  margin-left: 36px;
  margin-bottom: 18px;
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
            onClick={() => handleViewSetting("list")}
          />
        </ViewIcon>
        <ViewIcon title="Gallery View">
          <FontAwesomeIcon
            icon="th"
            size="2x"
            onClick={() => handleViewSetting("grid")}
          />
        </ViewIcon>
      </ViewIconGroup>
      {view === "grid" && (
        <RecipeCard.Container>
          {savedRecipes.map((recipe) => {
            return (
              <RecipeCardContainer
                key={getRecipeId(recipe.uri)}
                recipe={recipe}
                uid={uid}
                type="saved"
              />
            );
          })}
        </RecipeCard.Container>
      )}
      {view === "list" && (
        <RecipeCardList.Container>
          {savedRecipes.map((recipe) => {
            return (
              <RecipeCardListContainer
                key={getRecipeId(recipe.uri)}
                recipe={recipe}
                uid={uid}
                type="saved"
              />
            );
          })}
        </RecipeCardList.Container>
      )}
    </Wrapper>
  );
}
