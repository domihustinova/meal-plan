import React, { useState } from "react";
import styled from "styled-components/macro";

import { Form } from "../components";
import { HeaderContainer } from "../containers/Header";
import { FooterContainer } from "../containers/Footer";
import * as ROUTES from "../constants/routes";

export const Main = styled.main`
  position: relative;
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background.main};
`;

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <HeaderContainer />
      <Main>
        <Form>
          <Form.Title>Sign In</Form.Title>
          <Form.Frame>
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              themetype="primaryPastelBlue"
              size="normal"
              type="submit"
            >
              Sign In
            </Form.Submit>
          </Form.Frame>
          <Form.Text>
            New to MealPal?{" "}
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
        </Form>
      </Main>
      <FooterContainer />
    </>
  );
}
