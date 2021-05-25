export const getOptions = (dataObject) => {
  return Object.keys(dataObject).map((value) => ({
    label: dataObject[value],
    value,
  }));
};
