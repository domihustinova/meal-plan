import styled from "styled-components/macro";
import { MEDIA_QUERY } from "../../../theme/consts";
import Button from "../../common/Button";

export const Container = styled.section`
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${MEDIA_QUERY.MIN_LARGE} {
    width: 850px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media ${MEDIA_QUERY.MIN_MEDIUM} {
    width: 60%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  @media ${MEDIA_QUERY.MIN_LARGE} {
    margin: 0;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: ${({ theme }) => theme.lineHeightLarge};
  margin-top: 0;
  margin-bottom: 28px;
`;

export const ButtonLink = styled(Button)`
  width: 200px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #efefef;
  border-radius: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
    margin: 0px;
  }
`;

const getRowStyles = (name, type) => {
  const tokens = {
    justifyContent: {
      radio: "flex-start",
      input: "flex-start",
      button: "flex-end",
    },
    marginBottom: {
      radio: "25px",
      input: "15px",
      button: "0px",
    },
  };
  return tokens[name][type];
};

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => getRowStyles("justifyContent", props.type)};
  margin-bottom: ${(props) => getRowStyles("marginBottom", props.type)};

  @media (max-width: 720px) {
    flex-direction: column;
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

export const Error = styled.div`
  color: ${({ theme }) => theme.colorTextError};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  width: 100%;
  margin-top: 2px;
  margin-left: 5px;
  top: 100%;
  max-height: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${Label} {
    margin-bottom: 20px;
  }

  ${Error} {
    margin-top: 20px;
  }
`;

export const InputButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    flex-direction: column;
  }

  input[type="radio"] {
    visibility: hidden;
    height: 0;
    width: 0;

    @media (max-width: 720px) {
      margin-bottom: 50px;
      visibility: visible;
      height: 10;
      width: 10;
    }
  }

  label {
    padding: 0.75rem 1.5rem;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colorTextButtonSecondaryPastelBlue};
    background-color: ${({ theme }) =>
      theme.backgroundButtonSecondaryPastelBlue};
    cursor: pointer;
    border: 1px solid
      ${({ theme }) => theme.borderColorButtonSecondaryPastelBlue};
    border-radius: ${({ theme }) => theme.borderRadiusNormal};
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: all ${({ theme }) => theme.durationNormal} ease-in-out;
  }

  input[type="radio"]:hover + label,
  input[type="radio"]:checked + label {
    color: ${({ theme }) => theme.colorTextButtonPrimaryPastelBlue};
    background-color: ${({ theme }) => theme.backgroundButtonPrimaryPastelBlue};
  }
`;

export const Input = styled.input`
  width: 120px;
  height: 44px;
  border: 1px solid #efefef;
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  padding: 20px;
  font-size: 14px;
  background-color: transparent;
  box-sizing: border-box;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:focus,
  &:hover,
  &:not(:placeholder-shown) {
    outline: none;
    border: 1px solid
      ${({ theme }) => theme.borderColorButtonPrimaryPastelBlueHover};
  }

  &::placeholder {
    color: #efefef;
    opacity: 1;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: block;
  width: 130px;
  margin-bottom: 2px;
`;

export const Submit = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colorTextButtonPrimaryPastelBlue};
  background-color: ${({ theme }) => theme.backgroundButtonPrimaryPastelBlue};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.borderColorButtonPrimaryPastelBlue};

  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);

  outline: none;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colorTextButtonPrimaryPastelBlueHover};
    background-color: ${({ theme }) =>
      theme.backgroundButtonPrimaryPastelBlueHover};
    border: 1px solid
      ${({ theme }) => theme.borderColorButtonPrimaryPastelBlueHover};
  }
`;
