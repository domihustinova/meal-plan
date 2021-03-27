import React, { useState } from "react";
import styled from "styled-components/macro";

import { HeaderContainer } from "../containers/Header";
import { TdeeFormContainer } from "../containers/TdeeForm";
import { ResultsContainer } from "../containers/Results";

import { getCalories } from "../services/helpers";
import { HeroContainer } from "../containers/Hero";

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export function Home() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [caloriesData, setCaloriesData] = useState("");

  const onFormSubmit = (values) => {
    setCaloriesData(getCalories(values));
    setIsFormSubmitted(true);
  };

  return (
    <>
      <HeaderContainer />
      <Main>
        <HeroContainer />
        <TdeeFormContainer onFormSubmit={onFormSubmit} />
        {isFormSubmitted && <ResultsContainer caloriesData={caloriesData} />}
      </Main>
    </>
  );
}
