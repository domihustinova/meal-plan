import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 15px 36px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 325px;
  min-width: 325px;
  max-width: 32px;
  height: 350px;
  min-height: 350px;
  max-height: 350px;
  margin-bottom: 30px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  background-color: white;
  border-radius: 7.5px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);

  transition: all ease-in-out 0.3s;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.div`
  width: 100%;
  max-width: 325px;
  height: 190px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const TextContainer = styled.div`
  padding-bottom: 0;
  color: #00334e;
`;

export const Badge = styled.span`
  font-size: 0.75rem;
  padding: 4px 6px;
  border-radius: 20px;
  background-color: #ee6f57;
  width: fit-content;
  color: #fff;
  position: absolute;
`;

export const Time = styled(Badge)`
  right: -16px;
  top: ${({ hasMealType }) => (hasMealType ? "36px" : "8px")}; ;
`;

export const MealType = styled(Badge)`
  right: -16px;
  top: 8px;
`;

export const Title = styled.h3`
  color: #00334e;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  padding: 10px;
`;

export const EnergyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 50px;
`;

export const Energy = styled.div`
  font-size: 11px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const EnergyTitle = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const EnergyValue = styled.p`
  color: grey;
`;

export const Footer = styled.div`
  display: flex;
  border-top: 1px solid #f4f6f3;
  height: 45px;
`;

export const FooterButton = styled.button`
  background-color: white;
  color: #46b04a;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all ease-in-out 300ms;
  flex: 1;

  &:hover,
  &:focus {
    color: white;
    background-color: #72be6c;
  }
`;

export const FooterView = styled(FooterButton)`
  border-right: 1px solid #f4f6f3;
  flex: 1;
`;

export const FooterAdd = styled(FooterButton)`
  background-color: ${({ saved }) => (saved ? "#46b04a" : "#fff")};
  color: ${({ saved }) => (saved ? "#fff" : "#46b04a")};
`;
