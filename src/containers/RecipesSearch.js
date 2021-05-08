import React from "react";

import { dietOptions, mealTypeOptions } from "../constants/recipeSearch";

export function RecipesSearchContainer({
  handleSearch,
  isLoading,
  isFetching,
  query,
  setQuery,
  diet,
  setDiet,
  mealType,
  setMealType,
}) {
  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <div style={{ display: "flex" }}>
        <div>
          <p>Diet</p>
          {dietOptions.map((option) => (
            <div key={option.value}>
              <input
                type="checkbox"
                id={option.value}
                name="diet"
                value={option.value}
                checked={diet === option.value}
                onChange={() => setDiet(diet ? "" : option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </div>

        <br />
        <div>
          <p>Meal Type</p>
          {mealTypeOptions.map((option) => (
            <div key={option.value}>
              <input
                type="checkbox"
                id={option.value}
                name="mealType"
                value={option.value}
                checked={mealType === option.value}
                onChange={() => setMealType(mealType ? "" : option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
      <input type="text" value={query} onChange={updateQuery}></input>
      <button type="submit" disabled={query === ""}>
        {isLoading || isFetching ? "Searching..." : "Get Recipes"}
      </button>
    </form>
  );
}
