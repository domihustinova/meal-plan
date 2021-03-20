import * as Yup from "yup";

export const GOALS = [
  { title: "Maintenance", value: "maintenance" },
  { title: "Cutting", value: "cutting" },
  { title: "Bulking", value: "bulking" },
];

export const MACRO_RATIOS = [
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

export const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  high: 1.725,
  extreme: 1.9,
};

export const BMR_FACTORS = {
  weight: 10,
  height: 6.25,
  age: 5,
};

export const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export const activityOptions = [
  { label: "No sport", value: "sedentary" },
  { label: "Light", value: "light" },
  {
    label: "Moderate",
    value: "moderate",
  },
  {
    label: "High",
    value: "high",
  },
  { label: "Extreme", value: "extreme" },
];

export const validationSchemaForm = Yup.object({
  gender: Yup.string().required("Required gender"),
  age: Yup.number()
    .min(1, "That seems too young")
    .max(100, "That seems too old")
    .required("Required age"),
  weight: Yup.number()
    .positive("Must be more than 0 kg")
    .max(1000, "Must be 1000 kg or less")
    .required("Required weight"),
  height: Yup.number()
    .min(1, "Must be 1 cm or more")
    .max(250, "Must be 2.5 meters or less")
    .required("Required height"),
  activity: Yup.string()
    .oneOf(
      ["sedentary", "light", "moderate", "high", "extreme"],
      "Invalid Job Type"
    )
    .required("Required activity"),
});
