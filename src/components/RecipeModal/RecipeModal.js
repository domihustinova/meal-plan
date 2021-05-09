import React from "react";
import { Image, Modal, TextContainer, Time, Title } from "./styles/RecipeModal";

export default function RecipeModal({
  children,
  direction = "row",
  ...restProps
}) {
  return <Modal {...restProps}>{children}</Modal>;
}

RecipeModal.TextContainer = function RecipeModalTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

RecipeModal.Time = function RecipeModalTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

RecipeModal.Title = function RecipeModalTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

RecipeModal.Image = function RecipeModalImage({ ...restProps }) {
  return <Image {...restProps} />;
};
