import React, { useState } from "react";

import { Results } from "../components";
import illustration from "../images/illustration-results.svg";

import { goalsOptions } from "../constants/calculator";
import { getGoalData } from "../helpers/calories";

export function ResultsContainer({ caloriesData }) {
  const [selectedGoal, setSelectedGoal] = useState(goalsOptions[0].value);

  const handleSettingGoal = (goal) => {
    setSelectedGoal(goal);
  };

  const goalData = getGoalData(caloriesData, selectedGoal);

  return (
    <Results>
      <Results.Frame>
        <Results.TextContainer>
          <Results.Title>Recommended Macronutrients</Results.Title>
          <Results.Text>
            Based on your stats, the best estimate for your maintenance calories
            is{" "}
            <span style={{ fontWeight: 600 }}>
              {caloriesData.maintenanceTdee} calories per day
            </span>
            .
            <br />
            {selectedGoal === "maintenance" && (
              <span>
                The macronutrient values below reflect these calories for
                different diets.
              </span>
            )}
            {selectedGoal === "cutting" && (
              <span>
                The macronutrient values below reflect your {goalData.goal}{" "}
                calories of {goalData.tdee} calories per day for different
                diets. It is a 500 calorie per day deficit from your maintenance
                calories per day.
              </span>
            )}
            {selectedGoal === "bulking" && (
              <span>
                The macronutrient values below reflect your {goalData.goal}{" "}
                calories of {goalData.tdee} calories per day for different
                diets. It is a 500 calorie per day surplus from your maintenance
                calories per day.
              </span>
            )}
          </Results.Text>
          <Results.ButtonGroup>
            {goalsOptions.map((goal) => (
              <Results.Button
                themetype={
                  goal.value === selectedGoal
                    ? `primaryPastelBlue`
                    : `secondaryPastelBlue`
                }
                size="normal"
                key={goal.value}
                onClick={() => handleSettingGoal(goal.value)}
              >
                {goal.label}
              </Results.Button>
            ))}
          </Results.ButtonGroup>
        </Results.TextContainer>
        <Results.Image src={illustration} />
      </Results.Frame>

      <Results.CardGroup>
        {goalData.ratios.map((ratio) => (
          <Results.Card
            key={ratio.value}
            ratioData={ratio}
            maxMacroValue={goalData.maxMacroValue}
          />
        ))}
      </Results.CardGroup>
    </Results>
  );
}
