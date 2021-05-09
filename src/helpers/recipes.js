export const getLabel = (label, place = "search") => {
  const labelWithoutHyphen = label.replace(" - ", " ");
  const labelWithoutRecipe = labelWithoutHyphen.replace(/\brecipes?\b/gi, "");

  if (place === "saved") {
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
