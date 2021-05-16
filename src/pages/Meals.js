import React, { useState } from "react";

import { SavedRecipesContainer } from "../containers/SavedRecipes";
import { MyMealsContainer } from "../containers/Meals";
import { MealFormContainer } from "../containers/MealForm";

import { VIEW, SUB_PAGES } from "../constants/recipes";

export default function Meals({ user, savedRecipes }) {
  const [subPage, setSubPage] = useState(SUB_PAGES.SAVED_RECIPES);
  const [view, setView] = useState(
    JSON.parse(localStorage.getItem("savedRecipesView")) || VIEW.LIST
  );
  const [openAddMeal, setOpenAddMeal] = useState(false);

  const handleViewSetting = (value) => {
    localStorage.setItem("savedRecipesView", JSON.stringify(value));
    setView(value);
  };

  return (
    <div>
      <button onClick={() => setSubPage(SUB_PAGES.SAVED_RECIPES)}>
        Saved Recipes
      </button>
      <button onClick={() => setSubPage(SUB_PAGES.MY_MEALS)}>My Meals</button>
      <button title="Add Meal" onClick={() => setOpenAddMeal(true)}>
        Add Meal
      </button>

      {subPage === SUB_PAGES.SAVED_RECIPES && (
        <SavedRecipesContainer
          uid={user.uid}
          savedRecipes={savedRecipes}
          view={view}
          handleViewSetting={handleViewSetting}
        />
      )}
      {subPage === SUB_PAGES.MY_MEALS && <MyMealsContainer />}

      <MealFormContainer
        uid={user.uid}
        open={openAddMeal}
        setOpen={setOpenAddMeal}
      />
    </div>
  );
}
