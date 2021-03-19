import React, { useState } from "react";
import styled from "styled-components/macro";
import { Card, CardSection } from "@kiwicom/orbit-components";

import TdeeFormOld from "../TdeeFormOld/TdeeFormOld";
import { getCalories } from "../../services/helpers";
import ResultsCard from "../ResultsCard/ResultsCard";

const Container = styled.div`
  max-width: 750px;
`;

export default function Jumbo() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState("");
  const [caloriesData, setCaloriesData] = useState("");

  console.log(caloriesData);

  const onFormSubmit = (values) => {
    setSubmittedValues(values);
    setCaloriesData(getCalories(values));
    setIsFormSubmitted(true);
  };

  return (
    <Container>
      <Card title="Learn How Many Calories You Burn Every Day">
        <CardSection>
          {<TdeeFormOld onFormSubmit={onFormSubmit} />}
          {isFormSubmitted && <ResultsCard caloriesData={caloriesData} />}
        </CardSection>
      </Card>
    </Container>
  );
}
