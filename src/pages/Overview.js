import React, { useState, useEffect } from "react";
import { SummaryContainer } from "../containers/Summary";
import { WelcomeContainer } from "../containers/Welcome";

import { getCalories } from "../helpers/calories";

export default function Overview({ measurementsData }) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [caloriesData, setCaloriesData] = useState("");

  const handleCaloriesData = (data) => {
    setCaloriesData(getCalories(data));
  };

  useEffect(() => {
    if (measurementsData?.gender) {
      handleCaloriesData(measurementsData);
    }
  }, [measurementsData]);

  return (
    <>
      {measurementsData && caloriesData && (
        <SummaryContainer
          measurementsData={measurementsData}
          caloriesData={caloriesData}
        />
      )}
      {showWelcome && <WelcomeContainer />}
    </>
  );
}
