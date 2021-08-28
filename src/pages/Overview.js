import React, { useState, useEffect } from "react";
import { SummaryContainer } from "../containers/Summary";
import { WelcomeContainer } from "../containers/Welcome";

import { getGoalData } from "../helpers/calories";

export default function Overview({ measurementsData, caloriesData }) {
  const [goalData, setGoalData] = useState({});

  const handleGoalData = (measurementsData, caloriesData) => {
    setGoalData(getGoalData(caloriesData, measurementsData.goal));
  };

  useEffect(() => {
    if (caloriesData?.goalsData) {
      handleGoalData(measurementsData, caloriesData);
    }
  }, [measurementsData, caloriesData]);

  return (
    <>
      {goalData?.ratios ? (
        <SummaryContainer goalData={goalData} />
      ) : (
        <WelcomeContainer />
      )}
    </>
  );
}
