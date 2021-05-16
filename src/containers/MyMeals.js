import React from "react";
import styled from "styled-components/macro";

import { RecipeCardList } from "../components/";
import { RecipeCardContainer } from "../containers/RecipeCard";

import { PAGES, SUB_PAGES } from "../constants/recipes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export function MyMealsContainer({ uid, savedMeals, view }) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
