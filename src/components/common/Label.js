import React from "react";
import styled from "styled-components";

export const StyledLabel = styled.span`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  color: #333333;
  line-height: 16px;
  margin-bottom: 3px;
`;

const Label = ({ className, id, children }) => (
  <StyledLabel className={className} id={id}>
    {children}
  </StyledLabel>
);

export default Label;
