import React from "react";
import styled from "styled-components/macro";

export const StyledButton = styled.button`
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

const Button = ({ type, onClick, children, ...restProps }) => (
  <StyledButton type={type} onClick={onClick} {...restProps}>
    {children}
  </StyledButton>
);

export default Button;
