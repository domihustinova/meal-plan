import React, { useState } from "react";

import { SavedRecipesContainer } from "../containers/SavedRecipes";

export default function Meals({ user, savedRecipes }) {
  const [subPage, setSubPage] = useState("savedRecipes");
  return (
    <div>
      {subPage === "savedRecipes" && (
        <SavedRecipesContainer uid={user.uid} savedRecipes={savedRecipes} />
      )}
    </div>
  );
}
