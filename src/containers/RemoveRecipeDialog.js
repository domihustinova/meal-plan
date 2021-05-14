import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export function RemoveRecipeDialogContainer({
  recipeId,
  label,
  open,
  handleRemoveDialogClose,
  removeRecipe,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleRemoveDialogClose}
      aria-labelledby="remove-recipe"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete recipe?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Recipe for {label} will be removed from your saved recipes. Do you
          wish to proceed?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRemoveDialogClose} color="primary">
          Close
        </Button>
        <Button
          onClick={() => removeRecipe(recipeId)}
          color="primary"
          autoFocus
        >
          Delete recipe
        </Button>
      </DialogActions>
    </Dialog>
  );
}
