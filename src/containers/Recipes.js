import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import buildUrl from "build-url";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import { RecipesResultsContainer as Results } from "./RecipesResults";
import { RecipesSearchContainer as Search } from "./RecipesSearch";

import { API } from "../constants/recipeApi";

export function RecipesContainer({ user, savedRecipesIds }) {
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [mealType, setMealType] = useState("");

  const getRecipes = async () => {
    let additionalParams = {
      ...(diet && { diet: diet }),
      ...(mealType && { mealType: mealType }),
    };

    const queryUrl = buildUrl(API.URL, {
      path: "search",
      disableCSV: true,
      queryParams: {
        q: query,
        app_id: API.APP_ID,
        app_key: API.APP_KEY,
        from: 0,
        to: 25,
        // calories: "400-500",
        health: "alcohol-free",
        ...additionalParams,
      },
    });

    const response = await fetch(queryUrl);
    return response.json();
  };

  const { data, isError, isLoading, isFetching, isSuccess, refetch } = useQuery(
    "recipes",
    getRecipes,
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  const classes = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }))();

  return (
    <div>
      <Search
        handleSearch={handleSearch}
        isLoading={isLoading}
        isFetching={isFetching}
        query={query}
        setQuery={setQuery}
        diet={diet}
        setDiet={setDiet}
        mealType={mealType}
        setMealType={setMealType}
      />
      {isError && <div>Error fetching data</div>}
      {isSuccess && (
        <Results
          recipesData={data}
          savedRecipesIds={savedRecipesIds}
          uid={user.uid}
        />
      )}
      <Backdrop className={classes.backdrop} open={isLoading || isFetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
