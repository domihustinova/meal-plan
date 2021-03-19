import React, { useState } from "react";
import styled from "styled-components/macro";

import { TdeeFormContainer } from "../containers/TdeeForm";
import { ResultsContainer } from "../containers/Results";

import { Card, CardSection } from "@kiwicom/orbit-components";

import { getCalories } from "../services/helpers";

const Container = styled.div`
  max-width: 750px;
`;

export function Home() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState("");
  const [caloriesData, setCaloriesData] = useState("");

  const onFormSubmit = (values) => {
    setSubmittedValues(values);
    setCaloriesData(getCalories(values));
    setIsFormSubmitted(true);
  };

  return (
    <Container>
      <Card>
        <CardSection>
          {/* <TdeeForm onFormSubmit={onFormSubmit} /> */}
          <TdeeFormContainer onFormSubmit={onFormSubmit} />
          {isFormSubmitted && <ResultsContainer caloriesData={caloriesData} />}
        </CardSection>
      </Card>
    </Container>
  );
}
