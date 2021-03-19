// refactored

import React, { useState } from "react";
import styled from "styled-components/macro";
import Button from "../common/Button";
import GoalsCard from "./GoalsCard";

import { GOALS } from "../../services/consts";

const StyledResultsCardWrapper = styled.div``;

const StyledButtonGroup = styled.div`
  /* display: flex; */
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  margin: 0 2px 0 0;
  border: 1px solid #64c879;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#64c879")};
  background: ${({ isSelected }) => (isSelected ? "#64c879" : "#fff")};
  :first-child {
    border-radius: 4px 0 0 4px;
  }
  :last-child {
    border-radius: 0 4px 4px 0;
  }
`;

const ResultsCard = ({ caloriesData }) => {
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0].value);

  const handleSettingGoal = (goal) => {
    setSelectedGoal(goal);
  };

  const goalSelectionData = caloriesData.find(
    (obj) => obj.goal === selectedGoal
  );

  return (
    <StyledResultsCardWrapper>
      <StyledButtonGroup>
        {GOALS.map((goal) => (
          <StyledButton
            // key={goal.value}
            isSelected={goal.value === selectedGoal}
            onClick={() => handleSettingGoal(goal.value)}
          >
            {goal.title}
          </StyledButton>
        ))}
      </StyledButtonGroup>
      <GoalsCard goalSelectionData={goalSelectionData} />
    </StyledResultsCardWrapper>
  );
};

export default ResultsCard;
