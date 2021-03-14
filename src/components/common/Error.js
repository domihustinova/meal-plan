import * as React from "react";
import styled from "styled-components/macro";

export const StyledError = styled.div`
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

const Error = ({ error }) => {
  if (!error) return null;

  return <StyledError>{error}</StyledError>;
};

export default Error;
