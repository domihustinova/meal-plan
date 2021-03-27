import styled from "styled-components/macro";
import Button from "../../common/Button";

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.backgroundHero};
  overflow: hidden;
`;

export const Frame = styled.div`
  @media (min-width: 640px) {
    position: relative;
    max-width: 69.375rem;
    width: 100%;
    height: 650px;
    margin: 30px auto;
  }
`;

export const Image = styled.img`
  height: 15.625rem; /* 250px */

  @media (min-width: 640px) {
    position: absolute;
    top: 50px;
    left: 150px;
    height: 40rem;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  margin-top: 0px;
  margin-bottom: 24px;
  line-height: ${({ theme }) => theme.lineHeightLarge}; ;
`;

export const TextContainer = styled.div`
  text-align: center;

  @media (min-width: 640px) {
    position: absolute;
    top: 20px;
    left: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    width: 500px;
  }
`;

export const ButtonLink = styled(Button)``;
