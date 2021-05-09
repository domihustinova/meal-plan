import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PersonIcon from "@material-ui/icons/Person";
import WhatshotIcon from "@material-ui/icons/Whatshot";

import { RecipeCardGrid, RecipeModal } from "../components";
import { getLabel, getRecipeId } from "../helpers/recipes";

export function RecipeModalContainer({ open, setOpen, recipe }) {
  const {
    label,
    calories,
    image,
    totalTime,
    dietLabels,
    healthLabels,
    ingredients,
    url,
  } = recipe;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <RecipeModal>
        <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
        <RecipeModal.Title>{label}</RecipeModal.Title>
        <RecipeCardGrid.Image src={image} />
        <PersonIcon /> {recipe.yield} Foodies
        <WhatshotIcon />
        {Math.round(calories)} Cal
        <br />
        <a href={url} target="_blank">
          See Complete Recipe here
        </a>
      </RecipeModal>
    </Dialog>
  );
}
