import {
  GOALS,
  MACRO_RATIOS,
  ACTIVITY_MULTIPLIERS,
  BMR_FACTORS,
} from "./consts";

const getBmr = (gender, age, weight, height) => {
  let bmr =
    BMR_FACTORS.weight * weight +
    BMR_FACTORS.height * height -
    BMR_FACTORS.age * age;

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
  let tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);

  return GOALS.map((goal) => ({
    goal: goal.value,
    tdee: getTdeeForGoal(goal.value, tdee),
  }));
};

const getMacros = (tdee) => {
  return MACRO_RATIOS.map((ratio) => ({
    ratioName: ratio.name,
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
  const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);
  const maintenanceTdee = getTdeeForGoal("maintenance", tdee);
  const TDEE = getFinalTdee(activity, bmr);

  const final = TDEE.map((tdee) => ({
    ...tdee,
    ratios: getMacros(tdee.tdee),
  }));

  return {
    maintenanceTdee,
    final,
  };
};
