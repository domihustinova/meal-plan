export const calculateTdee = ({
  gender,
  age,
  weight,
  height,
  activity,
  bodyfat,
}) => {
  let weightFactor = 10;
  let heightFactor = 6.25;
  let ageFactor = 5;
  let tdee;

  // Mifflin St Jeor Formula
  let bmr = weightFactor * weight + heightFactor * height - ageFactor * age;

  gender === "female" ? (bmr -= 161) : (bmr += 5);

  switch (activity) {
    case "sedentary":
      tdee = Math.round(bmr * 1.2);
      break;
    case "light":
      tdee = Math.round(bmr * 1.375);
      break;
    case "moderate":
      tdee = Math.round(bmr * 1.55);
      break;
    case "heavy":
      tdee = Math.round(bmr * 1.725);
      break;
    case "extreme":
      tdee = Math.round(bmr * 1.9);
      break;
    default:
  }
  return tdee;
};
