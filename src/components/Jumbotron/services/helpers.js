const GOALS = ["maintenance", "cutting", "bulking"];

const MACRO_RATIOS = [
  {
    name: "Low Carb",
    protein: 40,
    carb: 20,
    fat: 40,
  },
  {
    name: "Moderate Carb",
    protein: 30,
    carb: 35,
    fat: 35,
  },
  {
    name: "High Carb",
    protein: 30,
    carb: 50,
    fat: 20,
  },
];

const getBmr = (gender, age, weight, height) => {
  const weightFactor = 10;
  const heightFactor = 6.25;
  const ageFactor = 5;

  let bmr = weightFactor * weight + heightFactor * height - ageFactor * age;

  return gender === "female" ? (bmr -= 161) : (bmr += 5);
};

const getTdeeForGoal = (goal, tdee) => {
  switch (goal) {
    case "maintenance":
      return tdee;
    case "cutting":
      return tdee - 500;
    case "bulking":
      return tdee + 500;
    default:
      return null;
  }
};

const getFinalTdee = (activity, bmr) => {
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    heavy: 1.725,
    extreme: 1.9,
  };

  let tdee = Math.round(bmr * activityMultipliers[activity]);

  return GOALS.map((goal) => ({
    goal,
    tdee: getTdeeForGoal(goal, tdee),
  }));
};

const getMacros = (tdee) => {
  return MACRO_RATIOS.map((ratio) => ({
    ratioName: ratio.name,
    macros: {
      protein: Math.floor((tdee * ratio.protein) / 100 / 4),
      carb: Math.floor((tdee * ratio.carb) / 100 / 4),
      fat: Math.floor((tdee * ratio.fat) / 100 / 9),
    },
    maxMacro: Math.max(
      Math.floor((tdee * ratio.protein) / 100 / 4),
      Math.floor((tdee * ratio.carb) / 100 / 4),
      Math.floor((tdee * ratio.fat) / 100 / 9)
    ),
  }));
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
  const TDEE = getFinalTdee(activity, bmr);

  const final = TDEE.map((tdee) => ({
    ...tdee,
    ratios: getMacros(tdee.tdee),
  }));

  return final;
};
