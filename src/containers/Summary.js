import React from "react";

import { Summary } from "../components/";

import { getGoalData } from "../helpers/calories";

export function SummaryContainer({ measurementsData, caloriesData }) {
  const goalData = getGoalData(caloriesData, measurementsData.goal);

  return (
    <div>
      {caloriesData && (
        <Summary>
          <Summary.Title>Your personal summary</Summary.Title>
          <Summary.Frame>
            <Summary.CardGroup>
              <Summary.CardCalories calories={goalData.tdee} />
              <Summary.Card
                key={goalData.ratios[1].value}
                ratioData={goalData.ratios[1]}
                maxMacroValue={goalData.maxMacroValue}
              />
            </Summary.CardGroup>
          </Summary.Frame>
        </Summary>
      )}
    </div>
  );
}
