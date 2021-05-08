export const getLabel = (label) => {
  const labelWithoutHyphen = label.replace(" - ", " ");
  const labelWithoutRecipe = labelWithoutHyphen.replace(/\brecipes?\b/gi, "");

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
