import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RecipeCardGrid } from "../components/";
import { RecipeCardList } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

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

export function MyMealsContainer({ uid, savedMeals, view, handleViewSetting }) {
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
          {savedMeals.map((meal) => {
            return (
              <RecipeCardContainer
                key={meal.id}
                recipe={meal}
                uid={uid}
                page={PAGES.SAVED}
                subPage={SUB_PAGES.MY_MEALS}
                view={view}
              />
            );
          })}
        </RecipeCardGrid.Container>
      )}
      {view === VIEW.LIST && (
        <RecipeCardList.Container>
          {savedMeals.map((meal) => {
            return (
              <RecipeCardContainer
                key={meal.id}
                recipe={meal}
                uid={uid}
                page={PAGES.SAVED}
                subPage={SUB_PAGES.MY_MEALS}
                view={view}
              />
            );
          })}
        </RecipeCardList.Container>
      )}
    </Wrapper>
  );
}
