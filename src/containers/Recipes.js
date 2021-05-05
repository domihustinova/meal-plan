import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import { FirestoreContext } from "../context/firestore";
import { RecipesResultsContainer as Results } from "./RecipesResults";
import { RecipesSearchContainer as Search } from "./RecipesSearch";

export function RecipesContainer({ user }) {
  const { db } = useContext(FirestoreContext);
  const uid = user.uid;
  const buildUrl = require("build-url");

  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [mealType, setMealType] = useState("");

  const getRecipes = async () => {
    let additionalParams = {
      ...(diet && { diet: diet }),
      ...(mealType && { mealType: mealType }),
    };

    const queryUrl = buildUrl("https://api.edamam.com", {
      path: "search",
      disableCSV: true,
      queryParams: {
        q: query,
        app_id: APP_ID,
        app_key: APP_KEY,
        from: 0,
        to: 25,
        // calories: "400-500",
        health: "alcohol-free",
        ...additionalParams,
      },
    });

    const response = await fetch(queryUrl);
    const data = await response.json();
    return data;
  };

  const { data, isError, isLoading, isFetching, isSuccess, refetch } = useQuery(
    "recipes",
    getRecipes,
    {
      refetchOnWindowFocus: false,
      enabled: false, // turned off by default, manual refetch is needed
    }
  );

  const handleSearch = (e) => {
    e.preventDefault();

    // manually refetch
    refetch();
  };

  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }));

  const classes = useStyles();

  const handleAddButton = (recipeId, recipe) => {
    db.collection("recipes")
      .doc(uid)
      .collection("userRecipes")
      .doc(recipeId)
      .set({
        ...recipe,
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const handleRemoveButton = (recipeId) => {
    db.collection("recipes")
      .doc(uid)
      .collection("userRecipes")
      .doc(recipeId)
      .delete()
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

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
          handleAddButton={handleAddButton}
          handleRemoveButton={handleRemoveButton}
        />
      )}
      <Backdrop className={classes.backdrop} open={isLoading || isFetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
