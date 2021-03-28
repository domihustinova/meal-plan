import styled from "styled-components/macro";
import { MEDIA_QUERY } from "../../../theme/consts";
import Button from "../../common/Button";

const BACKGROUND = {
  proteins: "linear-gradient(to right, #8eb1ee, #3961aa)",
  fats: "linear-gradient(to right, #6ebba6, #244552)",
  carbs: "linear-gradient(to right, #eba796, #cf3e35)",
};

export const Container = styled.section`
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${MEDIA_QUERY.MIN_LARGE} {
    max-width: 900px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 100%;
  order: 1;

  @media ${MEDIA_QUERY.MIN_MEDIUM} {
    width: 50%;
  }

  @media ${MEDIA_QUERY.MIN_LARGE} {
    order: 2;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;

  @media ${MEDIA_QUERY.MIN_LARGE} {
    margin: 0;
    align-items: flex-start;
    text-align: left;
    order: 1;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${MEDIA_QUERY.MIN_MEDIUM} {
    flex-direction: row;
    margin-bottom: 20px;
  }

  @media ${MEDIA_QUERY.MIN_LARGE} {
    justify-content: flex-start;
  }
`;

export const ButtonLink = styled(Button)`
  margin-bottom: 10px;

  @media ${MEDIA_QUERY.MIN_MEDIUM} {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${MEDIA_QUERY.MIN_LARGE} {
    max-width: 800px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media ${MEDIA_QUERY.MIN_LARGE} {
    max-width: 800px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  font-size: 14px;
  padding: 20px 30px;
  border: 1px solid #efefef;
  border-radius: 20px;
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: 24px;
  }

  @media ${MEDIA_QUERY.MIN_LARGE} {
    :not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const CardTitle = styled.h3`
  color: #000;
  font-weight: 500;
  margin: 10px;
`;

export const CardList = styled.ul`
  color: #7f8388;
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 2.5;
`;

export const CardListItem = styled.li`
  padding-bottom: 10px;
`;

export const ProgressBar = styled.div`
  margin: 0px auto;
  width: 160px;
  text-align: center;
`;

export const ProgressBarBackground = styled.div`
  border-radius: 10px;
  background: #f4f5f7;
`;

export const ProgressBarMoved = styled.div`
  height: 10px;
  width: ${({ width }) => width};
  background: ${({ background }) => BACKGROUND[background]};
  border-radius: 10px;
  transition: 0.4s linear;
  transition-property: width, background-color;
`;
