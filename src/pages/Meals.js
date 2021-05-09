import React, { useState } from "react";

import { SavedRecipesContainer } from "../containers/SavedRecipes";

export default function Meals({ user, savedRecipes }) {
  const [subPage, setSubPage] = useState("savedRecipes");
  const [view, setView] = useState(
    JSON.parse(localStorage.getItem("savedRecipesView")) || "list"
  );

  const handleViewSetting = (value) => {
    localStorage.setItem("savedRecipesView", JSON.stringify(value));
    setView(value);
  };

  return (
    <div>
      <button onClick={() => setSubPage("savedRecipes")}>Saved Recipes</button>
      <button onClick={() => setSubPage("myMeals")}>My Meals</button>
      <br />

      {subPage === "savedRecipes" && (
        <SavedRecipesContainer
          uid={user.uid}
          savedRecipes={savedRecipes}
          view={view}
          handleViewSetting={handleViewSetting}
        />
      )}
      {subPage === "myMeals" && <div>My Meals</div>}
    </div>
  );
}
