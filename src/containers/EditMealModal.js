import React from "react";
import Dialog from "@material-ui/core/Dialog";

export function EditMealModalContainer({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div>Edit meal</div>
    </Dialog>
  );
}
