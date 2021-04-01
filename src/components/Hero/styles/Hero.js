import styled from "styled-components/macro";
import { MEDIA_QUERY } from "../../../theme/consts";

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.background.hero};
  overflow: hidden;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 48px;

  @media ${MEDIA_QUERY.MIN_LARGE} {
    padding: 0;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;

  @media ${MEDIA_QUERY.MIN_LARGE} {
    position: relative;
    max-width: 69.375rem;
    width: 100%;
    height: 650px;
    margin: 30px auto;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media ${MEDIA_QUERY.MIN_LARGE} {
    position: absolute;
    top: 50px;
    left: 140px;
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

  @media ${MEDIA_QUERY.MIN_LARGE} {
    position: absolute;
    top: 20px;
    left: 16px;
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 500px;
  }
`;
