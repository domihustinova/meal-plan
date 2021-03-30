import React from "react";
import styled from "styled-components/macro";

import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/Footer";

export const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export default function SignIn() {
  return (
    <>
      <HeaderContainer />
      <Main />
      <FooterContainer />
    </>
  );
}
