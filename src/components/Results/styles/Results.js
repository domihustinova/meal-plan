import styled from "styled-components/macro";

import CommonButton from "../../common/Button";

const BACKGROUND = {
  proteins: "linear-gradient(to right, #5289f7, #6ae7d5)",
  carbs: "linear-gradient(to right, #ef476f, #f9bcca)",
  fats: "linear-gradient(to right, #9d79db, #e98dbd)",
};

export const Button = styled(CommonButton)`
  border-radius: 0;
  margin: 0 2px 0 0;
  border: 1px solid #64c879;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#64c879")};
  background: ${({ isSelected }) => (isSelected ? "#64c879" : "#fff")};
  :first-child {
    border-radius: 4px 0 0 4px;
  }
  :last-child {
    border-radius: 0 4px 4px 0;
  }
`;

export const Title = styled.h3``;
export const ButtonGroup = styled.div``;
export const Container = styled.div``;
export const Description = styled.div``;

export const CardGroup = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
`;

export const Card = styled.div`
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
`;

export const CardTitle = styled.h3`
  color: #4c594e;
  font-weight: 400;
  margin: 10px;
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
  width: 100%;
  text-align: center;
`;

export const ProgressBarBackground = styled.div`
  border-radius: 10px;
  background: #f4f5f7;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08); */
`;

export const ProgressBarMoved = styled.div`
  height: 10px;
  width: ${({ width }) => width};
  background: ${({ background }) => BACKGROUND[background]};
  border-radius: 10px;
  transition: 0.4s linear;
  transition-property: width, background-color;
`;
