import React, { useState } from "react";
import styled from "styled-components/macro";

import { TdeeFormContainer } from "../containers/TdeeForm";
import { ResultsContainer } from "../containers/Results";

import { getCalories } from "../services/helpers";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1110px;
  margin: 24px auto;
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
      <Main>
        <TdeeFormContainer onFormSubmit={onFormSubmit} />
        {isFormSubmitted && <ResultsContainer caloriesData={caloriesData} />}
      </Main>
    </>
  );
}
