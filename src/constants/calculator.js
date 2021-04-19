export const GOALS = [
  { label: "Maintenance", value: "maintenance" },
  { label: "Cutting", value: "cutting" },
  { label: "Bulking", value: "bulking" },
];

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

export const GENDER_OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export const ACTIVITY_OPTIONS = [
  {
    label: "No exercise",
    value: "sedentary",
    tooltip:
      "Sedentary lifestyle, little or no exercise, moderate walking, desk job",
  },
  {
    label: "Light",
    value: "light",
    tooltip:
      "Slightly active, exercise or light sports 1 to 3 days a week, light jogging or walking 3 to 4 days a week",
  },
  {
    label: "Moderate",
    value: "moderate",
    tooltip:
      "Moderately Active, physical work, exercise, or sports 4 to 5 days a week",
  },
  {
    label: "High",
    value: "high",
    tooltip:
      "Very active, heavy physical work, exercise, or sports 6 to 7 days a week, hard laborer ",
  },
  {
    label: "Extreme",
    value: "extreme",
    tooltip:
      "Extremely active, very heavy physical work or exercise every day, professional/olympic athlete",
  },
];
