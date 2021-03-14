import React, { useState } from "react";
import styled from "styled-components/macro";
import { Card, CardSection } from "@kiwicom/orbit-components";
import TdeeForm from "./TdeeForm/TdeeForm";
import { getCalories } from "./services/helpers";
import ResultsCard from "./ResultsCard/ResultsCard";

const Container = styled.div`
  max-width: 700px;
`;

export default function Jumbotron() {
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState("");
  const [macronutrients, setMacronutrients] = useState("");

  const onFormSubmit = (values) => {
    // setIsFormSubmitted(true);
    setSubmittedValues(values);
    setMacronutrients(getCalories(values));
    console.log(macronutrients);
  };

  return (
    <Container>
      <Card title="Learn How Many Calories You Burn Every Day">
        <CardSection>
          {<TdeeForm onFormSubmit={onFormSubmit} />}
          {<ResultsCard macronutrients={macronutrients} />}
        </CardSection>
      </Card>
    </Container>
  );
}
