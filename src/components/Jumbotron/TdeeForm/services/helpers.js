import * as Yup from "yup";

export const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export const activityOptions = [
  { label: "Sedentary (office job)", value: "sedentary" },
  { label: "Lightly Active (1-2 days/week)", value: "light" },
  {
    label: "Moderately Active (3-5 days/week)",
    value: "moderate",
  },
  {
    label: "Very Active (6-7 days/week)",
    value: "heavy",
  },
  { label: "Extremely Active (2x per day)", value: "extreme" },
];

export const validationSchema = Yup.object({
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
      ["sedentary", "light", "moderate", "heavy", "extreme"],
      "Invalid Job Type"
    )
    .required("Required activity"),
  bodyFat: Yup.number()
    .positive("Must be more than 0 %")
    .max(99, "Must be 99 % or less")
    .notRequired(),
});
