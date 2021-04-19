import styled from "styled-components/macro";
import { Button as CommonButton } from "../../common/Button";

export const Container = styled.div`
  padding: 36px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 24px 0;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-right: 14px;
`;

export const Card = styled.div`
  background-color: white;
  width: 700px;
  border-radius: 10px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
`;

export const CardContent = styled.div`
  padding: 36px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 700px;
  padding-right: 36px;
  padding-top: 24px;
`;

export const Button = styled(CommonButton)`
  border-radius: 10px;
  width: 105px;
  height: 40px;
  padding: 0;
  margin-left: 10px;
`;

export const TextButton = styled.button`
  color: ${({ theme }) => theme.colorText.textButton.profileEdit};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-left: 24px;
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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  border-top: 1px solid #e5eae7;

  :last-of-type {
    border-bottom: 1px solid #e5eae7;
  }
`;

export const RowTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: ${({ theme }) => theme.lineHeightLarge};
`;

export const RowOption = styled.button`
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

export const RowGroup = styled.div``;

export const RowText = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const ItemIcon = styled.span`
  margin-left: 6px;
`;

export const Input = styled.input`
  width: 75px;
  height: 30px;
  text-align: center;
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
