import React, { useState } from "react";

import { TdeeFormContainer } from "../containers/TdeeForm";
import { ResultsContainer } from "../containers/Results";

import { Container } from "../components/";
import { getCalories } from "../services/helpers";

export function Home() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [caloriesData, setCaloriesData] = useState("");

  const onFormSubmit = (values) => {
    setCaloriesData(getCalories(values));
    setIsFormSubmitted(true);
  };

  return (
    <Container>
      <TdeeFormContainer onFormSubmit={onFormSubmit} />
      {isFormSubmitted && <ResultsContainer caloriesData={caloriesData} />}
    </Container>
  );
}
