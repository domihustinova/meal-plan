import styled from "styled-components/macro";
import Button from "../../common/Button";

export const Container = styled.header`
  display: flex;
  background: #fff;
`;

export const Frame = styled.div`
  display: flex;
  width: 100%;
  max-width: 69.375rem;
  margin: 15px auto;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 36px;
  width: 36px;
  cursor: pointer;
  margin-right: 10px;
`;

export const HomeLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const ButtonLink = styled(Button)`
  margin-left: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;
