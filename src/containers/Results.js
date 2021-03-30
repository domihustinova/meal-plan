import React, { useState } from "react";

import { Results } from "../components";
import illustration from "../images/illustration-results.svg";

import { GOALS } from "../services/consts";

export function ResultsContainer({ caloriesData }) {
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0].value);

  const handleSettingGoal = (goal) => {
    setSelectedGoal(goal);
  };

  const goalSelectionData = caloriesData.goalsData.find(
    (obj) => obj.goal === selectedGoal
  );

  const maxMacroValue = goalSelectionData.ratios.reduce((prev, current) =>
    prev.maxMacro > current.maxMacro ? prev.maxMacro : current.maxMacro
  );

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
                The macronutrient values below reflect your{" "}
                {goalSelectionData.goal} calories of {goalSelectionData.tdee}{" "}
                calories per day for different diets. It is a 500 calorie per
                day deficit from your maintenance calories per day.
              </span>
            )}
            {selectedGoal === "bulking" && (
              <span>
                The macronutrient values below reflect your{" "}
                {goalSelectionData.goal} calories of {goalSelectionData.tdee}{" "}
                calories per day for different diets. It is a 500 calorie per
                day surplus from your maintenance calories per day.
              </span>
            )}
          </Results.Text>
          <Results.ButtonGroup>
            {GOALS.map((goal) => (
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
                {goal.title}
              </Results.Button>
            ))}
          </Results.ButtonGroup>
        </Results.TextContainer>
        <Results.Image src={illustration} />
      </Results.Frame>

      <Results.CardGroup>
        {goalSelectionData.ratios.map((ratio) => (
          <Results.Card
            key={ratio.value}
            ratioData={ratio}
            maxMacroValue={maxMacroValue}
          />
        ))}
      </Results.CardGroup>
    </Results>
  );
}
