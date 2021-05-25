import { PAGES } from "../constants/recipes";

export const getLabel = (label, page = PAGES.SEARCH) => {
  const labelWithoutHyphen = label.replace(" - ", " ");
  const labelWithoutRecipe = labelWithoutHyphen.replace(/\brecipes?\b/gi, "");

  if (page === PAGES.SAVED) {
    return labelWithoutRecipe;
  }

  const labelArray = labelWithoutRecipe.split(" ");

  if (labelArray.length >= 4) {
    return labelArray
      .slice(0, 4)
      .join(" ")
      .concat("...")
      .replace(" ...", "...");
  }
  return labelWithoutRecipe;
};

export const getRecipeId = (uri) => {
  return uri.split("_")[1];
};
