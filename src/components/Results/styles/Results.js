import styled from "styled-components/macro";

const BACKGROUND = {
  proteins: "linear-gradient(to right, #2246f5, #6ae7d5)",
  carbs: "linear-gradient(to right, #ef476f, #f9bcca)",
  fats: "linear-gradient(to right, #9d79db, #e98dbd)",
};

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: none;
  transition: all 300ms ease-in-out;

  @media (max-width: 850px) {
    padding: 24px;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 28px;
`;

export const Description = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 44px;
  padding: 0.75rem;
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  color: #2246f5;
  background: #fff;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-in-out;
  border: ${({ isSelected }) =>
    isSelected ? "1px solid #2246f5" : "1px solid transparent"};

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #2246f5;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  font-size: 14px;
  padding: 20px 30px;
  border-radius: 20px;
  overflow: hidden;
  background-color: $white;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);

  @media (max-width: 850px) {
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const CardTitle = styled.h3`
  color: #000;
  font-weight: 500;
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
