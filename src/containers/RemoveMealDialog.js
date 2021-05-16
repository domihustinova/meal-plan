import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export function RemoveMealDialogContainer({
  mealId,
  label,
  open,
  handleRemoveDialogClose,
  removeMeal,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleRemoveDialogClose}
      aria-labelledby="remove-meal"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete meal?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Meal {label} will be removed from your saved meals. Do you wish to
          proceed?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRemoveDialogClose} color="primary">
          Close
        </Button>
        <Button onClick={() => removeMeal(mealId)} color="primary" autoFocus>
          Delete meal
        </Button>
      </DialogActions>
    </Dialog>
  );
}
