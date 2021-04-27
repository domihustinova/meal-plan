export const MACRO_RATIOS = [
  {
    name: "Low Carb",
    value: "low",
    protein: 40,
    carb: 20,
    fat: 40,
  },
  {
    name: "Moderate Carb",
    value: "moderate",
    protein: 30,
    carb: 35,
    fat: 35,
  },
  {
    name: "High Carb",
    value: "high",
    protein: 30,
    carb: 50,
    fat: 20,
  },
];

export const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  high: 1.725,
  extreme: 1.9,
};

export const GOAL_ADDENDS = {
  maintenance: 0,
  cutting: -500,
  bulking: 500,
};

export const BMR_FACTORS = {
  weight: 10,
  height: 6.25,
  age: 5,
};

export const GOALS_DATA = {
  maintenance: "Maintenance",
  cutting: "Cutting",
  bulking: "Bulking",
};

export const goalsOptions = Object.keys(GOALS_DATA).map((value) => ({
  label: GOALS_DATA[value],
  value,
}));

export const getGoalsLabel = (value) => GOALS_DATA[value] || "";

export const GENDER_DATA = {
  male: "Male",
  female: "Female",
};

export const genderOptions = Object.keys(GENDER_DATA).map((value) => ({
  label: GENDER_DATA[value],
  value,
}));

export const getGenderLabel = (value) => GENDER_DATA[value] || "";

export const ACTIVITY_DATA = {
  sedentary: "Sedentary",
  light: "Light",
  moderate: "Moderate",
  high: "High",
  extreme: "Extreme",
};

export const ACTIVITY_TOOLTIP_DATA = {
  sedentary:
    "Sedentary lifestyle, little or no exercise, moderate walking, desk job",
  light:
    "Slightly active, exercise or light sports 1 to 3 days a week, light jogging or walking 3 to 4 days a week",
  moderate:
    "Moderately Active, physical work, exercise, or sports 4 to 5 days a week",
  high:
    "Very active, heavy physical work, exercise, or sports 6 to 7 days a week, hard laborer",
  extreme:
    "Extremely active, very heavy physical work or exercise every day, professional/olympic athlete",
};

export const activityOptions = Object.keys(ACTIVITY_DATA).map((value) => ({
  label: ACTIVITY_DATA[value],
  value,
  tooltip: ACTIVITY_TOOLTIP_DATA[value],
}));

export const getActivityLabel = (value) => ACTIVITY_DATA[value] || "";
