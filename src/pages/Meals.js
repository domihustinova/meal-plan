import React, { useState } from "react";

import { SavedRecipesContainer } from "../containers/SavedRecipes";
import { MyMealsContainer } from "../containers/MyMeals";
import { MealFormContainer } from "../containers/MealForm";

import { VIEW, SUB_PAGES } from "../constants/recipes";

export default function Meals({ user, savedRecipes, savedMeals }) {
  const [subPage, setSubPage] = useState(
    JSON.parse(localStorage.getItem("mealsSubPage")) || SUB_PAGES.SAVED_RECIPES
  );
  const [view, setView] = useState(
    JSON.parse(localStorage.getItem("savedRecipesView")) || VIEW.LIST
  );
  const [openAddMealForm, setOpenAddMealForm] = useState(false);

  const handleViewSetting = (value) => {
    localStorage.setItem("savedRecipesView", JSON.stringify(value));
    setView(value);
  };

  const handleSubPageSetting = (value) => {
    localStorage.setItem("mealsSubPage", JSON.stringify(value));
    setSubPage(value);
  };

  return (
    <div>
      <button onClick={() => handleSubPageSetting(SUB_PAGES.SAVED_RECIPES)}>
        Saved Recipes
      </button>
      <button onClick={() => handleSubPageSetting(SUB_PAGES.MY_MEALS)}>
        My Meals
      </button>
      <button title="Add Meal" onClick={() => setOpenAddMealForm(true)}>
        Add Meal
      </button>

      {subPage === SUB_PAGES.SAVED_RECIPES && (
        <SavedRecipesContainer
          uid={user.uid}
          savedRecipes={savedRecipes}
          view={view}
          subPage={SUB_PAGES.SAVED_RECIPES}
          handleViewSetting={handleViewSetting}
        />
      )}
      {subPage === SUB_PAGES.MY_MEALS && (
        <MyMealsContainer
          uid={user.uid}
          savedMeals={savedMeals}
          view={view}
          subPage={SUB_PAGES.MY_MEALS}
          handleViewSetting={handleViewSetting}
        />
      )}

      <MealFormContainer
        uid={user.uid}
        open={openAddMealForm}
        setOpen={setOpenAddMealForm}
        formType="add"
      />
    </div>
  );
}
