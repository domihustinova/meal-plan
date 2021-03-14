const getBmr = (gender, age, weight, height) => {
  const weightFactor = 10;
  const heightFactor = 6.25;
  const ageFactor = 5;

  // Mifflin St Jeor Formula
  let bmr = weightFactor * weight + heightFactor * height - ageFactor * age;

  return gender === "female" ? (bmr -= 161) : (bmr += 5);
};

const getTdee = (activity, bmr) => {
  switch (activity) {
    case "sedentary":
      return Math.round(bmr * 1.2);
    case "light":
      return Math.round(bmr * 1.375);
    case "moderate":
      return Math.round(bmr * 1.55);
    case "heavy":
      return Math.round(bmr * 1.725);
    case "extreme":
      return Math.round(bmr * 1.9);
    default:
      return null;
  }
};

const macroRatios = [
  {
    name: "lowCarb",
    protein: 40,
    carb: 20,
    fat: 40,
  },
  {
    name: "moderateCarb",
    protein: 30,
    carb: 35,
    fat: 35,
  },
  {
    name: "highCarb",
    protein: 30,
    carb: 50,
    fat: 20,
  },
];

const getMacros = (tdee) => {
  const macros = macroRatios.map((ratio) => ({
    name: ratio.name,
    protein: Math.floor((tdee * ratio.protein) / 100 / 4),
    carb: Math.floor((tdee * ratio.carb) / 100 / 4),
    fat: Math.floor((tdee * ratio.fat) / 100 / 9),
  }));

  return macros;
};

export const getCalories = ({
  gender,
  age,
  weight,
  height,
  activity,
  bodyfat,
}) => {
  const bmr = getBmr(gender, age, weight, height);
  const tdee = getTdee(activity, bmr);

  return getMacros(tdee);
};
