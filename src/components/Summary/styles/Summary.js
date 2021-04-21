import styled from "styled-components/macro";

const BACKGROUND = {
  proteins: "linear-gradient(to right, #8eb1ee, #002ba3)",
  fats: "linear-gradient(to right, #28A138, #72be6c)",
  carbs: "linear-gradient(to right, #eba796, #cf3e35)",
};

export const Container = styled.div`
  padding: 36px;
`;

export const Title = styled.h3`
  margin-bottom: 24px;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  max-width: 550px;
  border-radius: 10px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
`;

export const CardGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  font-size: 14px;
  padding: 20px 20px;
  border: 1px solid #efefef;
  border-radius: 5px;
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const CardCalories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 248px;
  font-size: 14px;
  padding: 20px 20px;
  border: 1px solid #efefef;
  border-radius: 5px;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  color: #000;
  font-weight: 500;
  margin: 10px;
`;

export const CardCaloriesContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardCaloriesNumber = styled.p`
  font-size: 48px;
`;

export const CardCaloriesText = styled.p`
  font-size: 24px;
`;

export const CardList = styled.ul`
  color: #7f8388;
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 2.5;
`;

export const CardListItem = styled.li`
  padding-bottom: 10px;
`;

export const ProgressBar = styled.div`
  margin: 0px auto;
  width: 160px;
  text-align: center;
`;

export const ProgressBarBackground = styled.div`
  border-radius: 10px;
  background: #f4f5f7;
`;

export const ProgressBarMoved = styled.div`
  height: 10px;
  width: ${({ width }) => width};
  background: ${({ background }) => BACKGROUND[background]};
  border-radius: 10px;
  transition: 0.4s linear;
  transition-property: width, background-color;
`;
