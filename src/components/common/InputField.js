import React from "react";
import styled from "styled-components/macro";
import Error from "./Error";
import Label from "./Label";

const InputWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 2px;
`;

const Input = styled.input`
  border: 1px solid ${({ error }) => (error ? `#D21C1C` : `#EFEFEF`)};
  padding: 12px;

  background-color: transparent;
  width: 100%;
  height: 100%;
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

export const InputField = ({
  name,
  type,
  value,
  label,
  placeholder,
  disabled,
  minValue,
  maxValue,
  minLength,
  maxLength,
  size,
  error,
  id,
  onChange,
  onFocus,
  onBlur,
  onKeyUp,
  onKeyDown,
  onSelect,
  onMouseUp,
  onMouseDown,
  tabIndex,
  autoComplete,
  autoFocus,
  children,
}) => {
  return (
    <InputWrapper htmlFor={id}>
      <Label id={id}>{label}</Label>
      <Input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        min={minValue}
        max={maxValue}
        minLength={minLength}
        maxLength={maxLength}
        size={size}
        error={error}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onSelect={onSelect}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        tabIndex={tabIndex}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
      >
        {children}
      </Input>
      <Error error={error}></Error>
    </InputWrapper>
  );
};

export default InputField;
