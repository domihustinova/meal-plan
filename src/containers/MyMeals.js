import React from "react";
import styled from "styled-components/macro";

import { RecipeCardGrid } from "../components/";
import { RecipeCardList } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { PAGES, SUB_PAGES, VIEW } from "../constants/recipes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export function MyMealsContainer({ uid, savedMeals, view }) {
  return (
    <Wrapper>
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
