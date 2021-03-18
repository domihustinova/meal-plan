import React from "react";
import styled from "styled-components";

const StyledGoalsCardContainer = styled.div``;

const StyledGoalsCardWrapper = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
`;

const StyledGoalsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 140px;
  border: 1px solid rgb(234, 237, 245);
  padding: 20px 35px;
  border-radius: 3px;
  overflow: hidden;
  background-color: $white;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);

  h3 {
    color: #4c594e;
    font-weight: 400;
    margin: 10px;
  }

  ul {
    color: #7f8388;
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2.5;
  }

  li {
    padding-bottom: 10px;
  }
`;

const StyledContainer = styled.div`
  margin: 0px auto;
  width: 100%;
  text-align: center;

  .progress2 {
    /* padding: 6px; */
    border-radius: 10px;
    background: #f4f5f7;
    /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08); */
  }

  .progress-bar-proteins,
  .progress-bar-carbs,
  .progress-bar-fats {
    height: 10px;
    border-radius: 10px;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.05)
    );
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress-moved .progress-bar-proteins {
    width: ${({ width }) => width};
    background: linear-gradient(to right, #5289f7, #6ae7d5);
    /* animation: progressAnimationProteins 6s; */
  }

  @keyframes progressAnimationProteins {
    0% {
      width: 5%;
      background-color: #5289f7;
    }
    100% {
      width: 85%;
      background-color: #6ae7d5;
    }
  }

  .progress-moved .progress-bar-carbs {
    width: ${({ width }) => width};
    background: linear-gradient(to right, #ef476f, #f9bcca);
    /* animation: progressAnimationCarbs 6s; */
  }

  @keyframes progressAnimationCarbs {
    0% {
      width: 5%;
      background-color: #ef476f;
    }
    100% {
      width: 85%;
      background-color: #f9bcca;
    }
  }

  .progress-moved .progress-bar-fats {
    width: ${({ width }) => width};
    background: linear-gradient(to right, #9d79db, #e98dbd);
    /* animation: progressAnimationFats 6s; */
  }

  @keyframes progressAnimationFats {
    0% {
      width: 5%;
      background-color: #9d79db;
    }
    100% {
      width: 85%;
      background-color: #e98dbd;
    }
  }
`;

const GoalsCard = ({ goalSelectionData }) => {
  const maxMacroValue = goalSelectionData.ratios.reduce((prev, current) =>
    prev.maxMacro > current.maxMacro ? prev.maxMacro : current.maxMacro
  );

  return (
    <StyledGoalsCardContainer>
      These macronutrient values reflect your {goalSelectionData.goal} calories
      of {goalSelectionData.tdee} calories per day.
      <StyledGoalsCardWrapper>
        {goalSelectionData.ratios.map((ratio) => (
          <StyledGoalsCard>
            <h3>{ratio.ratioName}</h3>
            <ul>
              <li>
                Carbohydrates - {ratio.macros.carb}g
                <StyledContainer
                  width={`${(ratio.macros.carb / maxMacroValue) * 100}%`}
                >
                  <div className="progress2 progress-moved">
                    <div className="progress-bar-carbs"></div>
                  </div>
                </StyledContainer>
              </li>
              <li>
                Proteins - {ratio.macros.protein}g
                <StyledContainer
                  width={`${(ratio.macros.protein / maxMacroValue) * 100}%`}
                >
                  <div className="progress2 progress-moved">
                    <div className="progress-bar-proteins"></div>
                  </div>
                </StyledContainer>
              </li>
              <li>
                Fats - {ratio.macros.fat}g
                <StyledContainer
                  width={`${(ratio.macros.fat / maxMacroValue) * 100}%`}
                >
                  <div className="progress2 progress-moved">
                    <div className="progress-bar-fats"></div>
                  </div>
                </StyledContainer>
              </li>
            </ul>
          </StyledGoalsCard>
        ))}
      </StyledGoalsCardWrapper>
    </StyledGoalsCardContainer>
  );
};

export default GoalsCard;
