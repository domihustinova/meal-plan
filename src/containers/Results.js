import React, { useState } from "react";
import { Results } from "../components";
import { GOALS } from "../services/consts";

export function ResultsContainer({ caloriesData }) {
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0].value);

  const handleSettingGoal = (goal) => {
    setSelectedGoal(goal);
  };

  const goalSelectionData = caloriesData.final.find(
    (obj) => obj.goal === selectedGoal
  );

  const maxMacroValue = goalSelectionData.ratios.reduce((prev, current) =>
    prev.maxMacro > current.maxMacro ? prev.maxMacro : current.maxMacro
  );

  return (
    <Results>
      <Results.Title>Recommended Macronutrients</Results.Title>
      <Results.Description>
        Based on your stats, the best estimate for your maintenance calories is{" "}
        {caloriesData.maintenanceTdee} calories per day. The macronutrient
        values below reflect your {goalSelectionData.goal} calories of{" "}
        {goalSelectionData.tdee} calories per day.
      </Results.Description>
      <Results.Content>
        <Results.ButtonGroup>
          {GOALS.map((goal) => (
            <Results.Button
              isSelected={goal.value === selectedGoal}
              onClick={() => handleSettingGoal(goal.value)}
            >
              {goal.title}
            </Results.Button>
          ))}
        </Results.ButtonGroup>

        <Results.CardGroup>
          {goalSelectionData.ratios.map((ratio) => (
            <Results.Card ratioData={ratio} maxMacroValue={maxMacroValue} />
          ))}
        </Results.CardGroup>
      </Results.Content>
    </Results>
  );
}
