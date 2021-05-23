import styled from "styled-components/macro";
import { Button as CommonButton } from "../../common/Button";

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  padding: 36px;
`;

export const SuccessCard = styled.div`
  padding: 40px;
`;

export const SuccessCardText = styled.p`
  font-size: 16px;
`;

export const SuccessCardTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e5eae7;

  :first-of-type {
    border-top: 1px solid #e5eae7;
  }
`;

export const RowTitle = styled.p`
  color: #000;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: ${({ theme }) => theme.lineHeightLarge};
`;

export const RowGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputButtonOption = styled.button`
  color: ${(props) =>
    props.selected
      ? props.theme.colorText.textButton.profileSelected
      : props.theme.colorText.textButton.profile};
  font-size: 14px;
  margin-left: 12px;

  background: none;
  border: none;
  text-align: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.durationFast} ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colorText.textButton.profileHover};
  }
`;

export const InputButtonOptionGroup = styled.div``;

export const InputButtonGroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RowText = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const Button = styled(CommonButton)`
  border-radius: 10px;
  width: 100%;
  max-width: 175px;
  height: 40px;
  padding: 0;
  margin-left: 12px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 24px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 2px;
`;

export const Input = styled.input`
  width: ${(props) => (props.type === "number" ? "75px" : "500px")};
  padding-left: 10px;
  height: 30px;
  margin-left: 10px;
  text-align: left;
  outline: none;
  border: 1px solid #e5eae7;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:focus,
  &:hover,
  &:not(:placeholder-shown) {
    outline: none;
    border: 1px solid ${({ theme }) => theme.border.inputHover.green};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #333333;
  line-height: 16px;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colorText.error};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-top: 2px;
  text-align: right;
  top: 100%;
  max-height: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
