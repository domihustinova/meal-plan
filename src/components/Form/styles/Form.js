import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import Button from "../../common/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  margin: 0 auto;
  max-width: 450px;
  padding: 60px 68px 40px;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Frame = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.border.input};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  font-size: 14px;

  background-color: transparent;
  box-sizing: border-box;
  transition: all ${({ theme }) => theme.durationNormal} ease-in-out;

  &:focus,
  &:hover,
  &:not(:placeholder-shown) {
    outline: none;
    border: 1px solid ${({ theme }) => theme.border.inputHover};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colorText.placeholder};
    opacity: 1;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Submit = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colorText.link.form};
  outline: none;
  transition: 0.4s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colorText.link.formHover};
    text-decoration: underline;
  }
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.colorText.error};
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
