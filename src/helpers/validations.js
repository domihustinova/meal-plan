import * as Yup from "yup";

export const validationSchemaTdeeForm = Yup.object({
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

export const validationSchemaMealForm = Yup.object({
  label: Yup.string().required("Required"),
  calories: Yup.number().min(1, "That seems too little").required("Required"),
  protein: Yup.number().min(1, "That seems too little").required("Required"),
  carbs: Yup.number().min(1, "That seems too little").required("Required"),
  fat: Yup.number().min(1, "That seems too little").required("Required"),
  portions: Yup.number().min(1, "That seems too little").required("Required"),
  mealType: Yup.string().required("Required"),
});
