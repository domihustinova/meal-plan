import styled from "styled-components/macro";

export const Error = styled.div`
  color: #d21c1c;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  width: 100%;
  margin-top: 2px;
  position: absolute;
  top: 100%;
  max-height: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Container = styled.div``;

export const Select = styled.select`
  appearance: none;
  background: #fff;
  cursor: pointer;
  color: #252a31;
  height: 32px;
  padding: 0 32px 0 12px;
  outline: none;
  width: 100%;
  color: #000;
  transition: box-shadow 0.15s ease-in-out;
  border-radius: 3px;

  &::placeholder {
    color: #efefef;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ error }) => (error ? `#D21C1C` : `#64c879`)};
    box-shadow: ${({ error }) =>
      error
        ? `inset 0 0 0 1px rgba(210, 28, 28, 0.15), 0 0 0 3px rgba(210, 28, 28, 0.15)`
        : `none`};
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 1px solid ${({ error }) => (error ? `#D21C1C` : `#EFEFEF`)};
  padding: 12px;
  background-color: transparent;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  border-radius: 3px;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid ${({ error }) => (error ? `#D21C1C` : `#64c879`)};
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
  width: 100%;
  margin-bottom: 2px;
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  color: #333333;
  line-height: 16px;
  margin-bottom: 3px;
`;

export const Submit = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  background: #64c879;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 1px rgba(100, 200, 121, 0.15),
      0 0 0 3px rgba(100, 200, 121, 0.15);
  }
`;
