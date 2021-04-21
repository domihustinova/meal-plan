import {
  goalsOptions,
  MACRO_RATIOS,
  ACTIVITY_MULTIPLIERS,
  GOAL_ADDENDS,
  BMR_FACTORS,
} from "../constants/calculator";

const getBmr = (gender, age, weight, height) => {
  let bmr =
    BMR_FACTORS.weight * weight +
    BMR_FACTORS.height * height -
    BMR_FACTORS.age * age;

  return gender === "female" ? (bmr -= 161) : (bmr += 5);
};

const getFinalTdee = (activity, bmr) => {
  let tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);

  return goalsOptions.map((goal) => ({
    goal: goal.value,
    tdee: tdee + GOAL_ADDENDS[goal.value],
  }));
};

const getMacros = (tdee) => {
  return MACRO_RATIOS.map((ratio) => ({
    name: ratio.name,
    value: ratio.value,
    macros: [
      {
        name: "Proteins",
        key: "proteins",
        amount: Math.floor((tdee * ratio.protein) / 100 / 4),
      },
      {
        name: "Carbohydrates",
        key: "carbs",
        amount: Math.floor((tdee * ratio.carb) / 100 / 4),
      },
      {
        name: "Fats",
        key: "fats",
        amount: Math.floor((tdee * ratio.fat) / 100 / 9),
      },
    ],
    maxMacro: Math.max(
      Math.floor((tdee * ratio.protein) / 100 / 4),
      Math.floor((tdee * ratio.carb) / 100 / 4),
      Math.floor((tdee * ratio.fat) / 100 / 9)
    ),
  }));
};

export const getCalories = ({ gender, age, weight, height, activity }) => {
  const bmr = getBmr(gender, age, weight, height);
  const maintenanceTdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);
  const TDEE = getFinalTdee(activity, bmr);

  const goalsData = TDEE.map((tdee) => ({
    ...tdee,
    ratios: getMacros(tdee.tdee),
  }));

  return {
    maintenanceTdee,
    goalsData,
  };
};
