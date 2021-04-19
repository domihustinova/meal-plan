import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Button,
  Container,
  Card,
  CardContent,
  CardFooter,
  Header,
  Input,
  ItemIcon,
  Row,
  RowGroup,
  RowOption,
  RowText,
  RowTitle,
  TextButton,
  Title,
} from "./styles/Profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Header = function ProfileHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profile.Card = function ProfileCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Profile.CardContent = function ProfileCardContent({ children, ...restProps }) {
  return <CardContent {...restProps}>{children}</CardContent>;
};

Profile.CardFooter = function ProfileCardFooter({ children, ...restProps }) {
  return <CardFooter {...restProps}>{children}</CardFooter>;
};

Profile.Row = function ProfileRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Profile.RowText = function ProfileRowText({ children, ...restProps }) {
  return <RowText {...restProps}>{children}</RowText>;
};

Profile.RowTitle = function ProfileRowTitle({ children, ...restProps }) {
  return <RowTitle {...restProps}>{children}</RowTitle>;
};

Profile.RowGroup = function ProfileRowGroup({ children, ...restProps }) {
  return <RowGroup {...restProps}>{children}</RowGroup>;
};

Profile.RowOption = function ProfileRowOption({ children, ...restProps }) {
  return <RowOption {...restProps}>{children}</RowOption>;
};

Profile.TextButton = function ProfileTextButton({ children, ...restProps }) {
  return <TextButton {...restProps}>{children}</TextButton>;
};

Profile.Button = function ProfileButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Profile.ItemIcon = function ProfileItemIcon({ icon }) {
  return (
    <ItemIcon>
      <FontAwesomeIcon icon={icon} />
    </ItemIcon>
  );
};

Profile.Input = function ProfileInput({ ...restProps }) {
  return <Input {...restProps} />;
};
