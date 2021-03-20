import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
  margin-top: 0;
  margin-bottom: 28px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify};
  margin-bottom: 25px;

  :nth-of-type(2) {
    margin-bottom: 15px;
  }

  :last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #333333;
  line-height: 16px;
`;

export const Error = styled.div`
  color: #d21c1c;
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
  @media (max-width: 600px) {
    flex-direction: column;
  }

  input[type="radio"] {
    visibility: hidden;
    height: 0;
    width: 0;

    @media (max-width: 600px) {
      margin-bottom: 50px;
    }
  }

  label {
    width: 120px;
    height: 40px;
    padding: 0.75rem 1.5rem;
    margin-right: 10px;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    color: #2246f5;
    background: #fff;
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
    transition: all 300ms ease-in-out;
  }

  input[type="radio"]:checked + label {
    color: #2246f5;
    border: 1px solid #2246f5;
  }
`;

export const Input = styled.input`
  width: 100px;
  height: 44px;
  border-radius: 20px;

  border: 1px solid ${({ error }) => (error ? `#D21C1C` : `#EFEFEF`)};
  padding: 20px;
  font-size: 14px;
  background-color: transparent;
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid ${({ error }) => (error ? `#D21C1C` : `#2246f5`)};
    box-shadow: ${({ error }) =>
      error
        ? `inset 0 0 0 1px rgba(210, 28, 28, 0.15), 0 0 0 3px rgba(210, 28, 28, 0.15)`
        : `none`};
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
  margin-bottom: 2px;
  margin-right: 10px;
`;

export const Submit = styled.button`
  width: 125px;
  height: 50px;
  margin-top: 15px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: #2246f5;
  box-shadow: 0px 3px 7px rgba(34, 70, 245, 0.3);
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`;
