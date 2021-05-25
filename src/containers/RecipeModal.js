import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";
import WhatshotIcon from "@material-ui/icons/Whatshot";

import { RecipeCardGrid, RecipeModal } from "../components";

export function RecipeModalContainer({ open, setOpen, recipe }) {
  const { label, calories, image, url } = recipe;

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
        <a href={url} target="_blank" rel="noreferrer">
          See Complete Recipe here
        </a>
      </RecipeModal>
    </Dialog>
  );
}
