import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardSection } from "@kiwicom/orbit-components";
import TdeeForm from "./TdeeForm/TdeeForm";
import { calculateTdee } from "./services/helpers";

const Container = styled.div`
  max-width: 700px;
`;

export default function Jumbotron() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState("");
  const [tdee, setTdee] = useState("");

  const onFormSubmit = (values) => {
    setIsFormSubmitted(true);
    setSubmittedValues(values);
    setTdee(calculateTdee(values));
  };

  return (
    <Container>
      <Card title="Learn How Many Calories You Burn Every Day">
        <CardSection>
          {!isFormSubmitted && <TdeeForm onFormSubmit={onFormSubmit} />}
        </CardSection>
      </Card>
    </Container>
  );
}
