import React, { useState } from "react";

import { Summary } from "../components/";

export function SummaryContainer({ measurementsData, caloriesData }) {
  const [selectedGoal, setSelectedGoal] = useState(measurementsData.goal);

  const goalSelectionData = caloriesData.goalsData.find(
    (obj) => obj.goal === selectedGoal
  );

  const maxMacroValue = goalSelectionData.ratios.reduce((prev, current) =>
    prev.maxMacro > current.maxMacro ? prev.maxMacro : current.maxMacro
  );

  return (
    <div>
      {caloriesData && (
        <Summary>
          <Summary.Title>Your personal summary</Summary.Title>
          <Summary.Frame>
            <Summary.CardGroup>
              <Summary.CardCalories calories={goalSelectionData.tdee} />
              <Summary.Card
                key={goalSelectionData.ratios[1].value}
                ratioData={goalSelectionData.ratios[1]}
                maxMacroValue={maxMacroValue}
              />
            </Summary.CardGroup>
          </Summary.Frame>
        </Summary>
      )}
    </div>
  );
}
