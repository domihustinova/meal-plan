import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 750px;
  width: 100%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  border-radius: 7.5px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 750px;

  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #f4f6f3;
  background-color: white;
`;

export const Image = styled.div`
  min-width: 80px;
  min-height: 80px;
  margin-right: 20px;

  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const getButtonStyleToken = (name, color) => {
  const tokens = {
    backgroundColor: {
      green: "#72be6c",
      orange: "#ee6f57",
    },
  };
  return tokens[name][color];
};

export const Badge = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 6px 8px;
  margin-right: 5px;

  border-radius: 20px;
  font-size: 12px;

  background-color: ${(props) =>
    getButtonStyleToken("backgroundColor", props.color)};
  color: #fff;
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BadgesGroup = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  color: #00334e;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Button = styled.button`
  height: 35px;
  width: 35px;
  padding: 10px;
  margin-left: 5px;

  color: white;
  background-color: #72be6c;

  border: 1px solid #f4f6f3;
  border-radius: 50%;

  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;

  text-decoration: none;
  text-transform: uppercase;
  transition: all ease-in-out 300ms;
  flex: 1;

  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    color: white;
    background-color: #46b04a;
  }
`;
