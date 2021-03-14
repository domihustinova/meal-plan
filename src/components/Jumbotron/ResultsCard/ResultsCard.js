import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";

const GOALS = [
  { title: "Maintenance", value: "maintenance" },
  { title: "Cutting", value: "cutting" },
  { title: "Bulking", value: "bulking" },
];

const StyledResultsCardWrapper = styled.div``;

const StyledButtonGroup = styled.div`
  display: flex;

  Button {
    border-radius: 0;
    margin: 0 2px 0 0;
    :first-child {
      border-radius: 4px 0 0 4px;
    }
    :last-child {
      border-radius: 0 4px 4px 0;
    }
  }
`;

const ResultsCard = () => {
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0]);

  const handleSettingGoal = (goal) => {
    setSelectedGoal(goal);
    console.log(selectedGoal);
  };

  return (
    <StyledResultsCardWrapper>
      <StyledButtonGroup>
        {GOALS.map((goal) => (
          <Button key={goal.value} onClick={() => handleSettingGoal(goal)}>
            {goal.title}
          </Button>
        ))}
      </StyledButtonGroup>
    </StyledResultsCardWrapper>
  );
};

export default ResultsCard;
