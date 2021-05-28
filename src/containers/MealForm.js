import React, { useState, useContext } from "react";
import { Formik, Form } from "formik";
import _ from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { FirestoreContext } from "../context/firestore";
import { MealForm } from "../components/";
import { mealTypeOtions } from "../constants/mealForm";
import { validationSchemaMealForm } from "../helpers/validations";

import { SUB_PAGES } from "../constants/recipes";

export function MealFormContainer({
  uid,
  open,
  setOpen,
  mealData,
  formType,
  subPage,
}) {
  const { db } = useContext(FirestoreContext);

  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [ingredients, setIngredients] = useState(
    mealData?.ingredients || [{ weight: "", text: "" }]
  );

  const getIngredients = (ingredients) => {
    return ingredients
      .filter(
        (ingredient) => ingredient.weight !== "" && ingredient.text !== ""
      )
      .map((ingredient) => ({
        ...ingredient,
        weight: Number(ingredient.weight),
      }));
  };

  const saveMeal = (values) => {
    setIsLoading(true);
    const meal = {
      ...mealData,
      label: values.label,
      calories: Math.round(values.calories),
      totalNutrients: {
        PROCNT: {
          label: "Protein",
          quantity: Math.round(values.protein),
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: Math.round(values.carbs),
          unit: "g",
        },
        FAT: {
          label: "Fat",
          quantity: Math.round(values.fat),
          unit: "g",
        },
      },
      yield: values.portions,
      mealType: [values.mealType],
      ingredients: getIngredients(ingredients),
    };

    db.collection("meals")
      .doc(uid)
      .collection("userMeals")
      .doc(meal.id || Math.random().toString(36).slice(2))
      .set(meal)
      .then(() => {
        setIsLoading(false);
        setShowSuccessCard(true);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const handleClose = () => {
    setOpen(false);
    setShowSuccessCard(false);
    setIngredients(mealData?.ingredients || [{ weight: "", text: "" }]);
  };

  const classes = makeStyles(() => ({
    paper: { minWidth: "800px" },
  }))();

  const addMealFormInitialValues = {
    label: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    portions: "",
    mealType: "",
  };

  const editMealFormInitialValues = {
    label: mealData?.label,
    calories: Math.round(mealData?.calories),
    protein: Math.round(mealData?.totalNutrients?.PROCNT.quantity),
    carbs: Math.round(mealData?.totalNutrients?.CHOCDF.quantity),
    fat: Math.round(mealData?.totalNutrients?.FAT.quantity),
    portions: mealData?.yield,
    mealType: mealData?.mealType?.[0] || [],
  };

  const handleIngredientInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedIngredients = _.cloneDeep(ingredients);
    updatedIngredients[index][name] = value;
    setIngredients(updatedIngredients);
  };

  const handleIngredientRemoveClick = (index) => {
    setIngredients(ingredients.filter((_, idx) => idx !== index));
  };

  const handleIngredientAddClick = () => {
    const updatedIngredients = _.cloneDeep(ingredients);
    setIngredients([...updatedIngredients, { weight: "", text: "" }]);
  };

  return (
    <>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          classes={{ paper: classes.paper }}
        >
          {showSuccessCard ? (
            <MealForm.SuccessCard>
              <MealForm.SuccessCardTitle>Success!</MealForm.SuccessCardTitle>
              <MealForm.SuccessCardText>
                {subPage === SUB_PAGES.SAVED_RECIPES
                  ? "Recipe was successfully changed and added to My Meals."
                  : `Meal was successfully ${
                      formType === "add" ? "added" : "changed"
                    }.`}
              </MealForm.SuccessCardText>
              <MealForm.ButtonGroup>
                <MealForm.Button
                  themetype="secondaryGreen"
                  size="normal"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </MealForm.Button>
              </MealForm.ButtonGroup>
            </MealForm.SuccessCard>
          ) : (
            <Formik
              initialValues={
                formType === "add"
                  ? addMealFormInitialValues
                  : editMealFormInitialValues
              }
              validationSchema={validationSchemaMealForm}
              onSubmit={(values) => {
                saveMeal(values);
              }}
            >
              <Form>
                <MealForm>
                  <MealForm.Title>{`${formType === "add" ? "Add" : "Edit"} ${
                    subPage === SUB_PAGES.SAVED_RECIPES ? "recipe" : "meal"
                  }`}</MealForm.Title>

                  <MealForm.Row>
                    <MealForm.RowTitle>Name</MealForm.RowTitle>
                    <MealForm.InputContainer
                      type="text"
                      id="label"
                      name="label"
                      label="Meal Name"
                      placeholder=" "
                    />
                  </MealForm.Row>

                  <MealForm.Row>
                    <MealForm.RowTitle>Calories</MealForm.RowTitle>
                    <MealForm.InputContainer
                      type="number"
                      id="calories"
                      name="calories"
                      label="Calories"
                      placeholder="kcal"
                    />
                  </MealForm.Row>

                  <MealForm.Row>
                    <MealForm.RowTitle>
                      Macros (Protein/Carbs/Fat)
                    </MealForm.RowTitle>

                    <MealForm.RowGroup>
                      <MealForm.InputContainer
                        type="number"
                        id="protein"
                        name="protein"
                        label="Protein"
                        placeholder="g"
                      />
                      <MealForm.InputContainer
                        type="number"
                        id="carbs"
                        name="carbs"
                        label="Carbs"
                        placeholder="g"
                      />
                      <MealForm.InputContainer
                        type="number"
                        id="fat"
                        name="fat"
                        label="Fat"
                        placeholder="g"
                      />
                    </MealForm.RowGroup>
                  </MealForm.Row>

                  <MealForm.Row>
                    <MealForm.RowTitle>Portions</MealForm.RowTitle>
                    <MealForm.InputContainer
                      type="number"
                      id="portions"
                      name="portions"
                      label="Portions"
                      placeholder=" "
                    />
                  </MealForm.Row>

                  <MealForm.Row>
                    <MealForm.RowTitle>Meal Type</MealForm.RowTitle>
                    <MealForm.InputButtonGroupContainer
                      name="mealType"
                      options={mealTypeOtions}
                    />
                  </MealForm.Row>

                  <MealForm.Row>
                    <MealForm.RowTitle>Ingredients</MealForm.RowTitle>
                    <MealForm.IngredientInputGroup>
                      {ingredients.map((ingredient, index) => (
                        <MealForm.IngredientInputRow>
                          <MealForm.IngredientInput
                            name="weight"
                            type="number"
                            placeholder="g"
                            value={
                              ingredient.weight && Math.round(ingredient.weight)
                            }
                            onChange={(e) =>
                              handleIngredientInputChange(e, index)
                            }
                          />
                          g
                          <MealForm.IngredientInput
                            name="text"
                            type="text"
                            placeholder=" "
                            value={ingredient.text}
                            onChange={(e) =>
                              handleIngredientInputChange(e, index)
                            }
                          />
                          <MealForm.IngredientInputButtonGroup>
                            {ingredients.length !== 1 && (
                              <MealForm.IngredientInputButton
                                type="button"
                                onClick={() =>
                                  handleIngredientRemoveClick(index)
                                }
                              >
                                <FontAwesomeIcon icon="minus" size="lg" />
                              </MealForm.IngredientInputButton>
                            )}
                            {ingredients[index].weight !== "" &&
                            ingredients[index].text &&
                            ingredients.length - 1 === index ? (
                              <MealForm.IngredientInputButton
                                type="button"
                                onClick={handleIngredientAddClick}
                              >
                                <FontAwesomeIcon icon="plus" size="lg" />
                              </MealForm.IngredientInputButton>
                            ) : null}
                          </MealForm.IngredientInputButtonGroup>
                        </MealForm.IngredientInputRow>
                      ))}
                    </MealForm.IngredientInputGroup>
                  </MealForm.Row>

                  <MealForm.ButtonGroup>
                    <MealForm.Button
                      themetype="secondaryGreen"
                      size="normal"
                      type="button"
                      onClick={handleClose}
                    >
                      Close
                    </MealForm.Button>

                    {formType === "add" && (
                      <MealForm.Button
                        themetype="primaryGreen"
                        size="normal"
                        type="submit"
                      >
                        {isLoading ? (
                          <CircularProgress color="inherit" />
                        ) : (
                          "Add Meal"
                        )}
                      </MealForm.Button>
                    )}
                    {formType === "edit" && (
                      <MealForm.Button
                        themetype="primaryGreen"
                        size="normal"
                        type="submit"
                      >
                        {isLoading ? (
                          <CircularProgress color="inherit" />
                        ) : (
                          `${
                            subPage === SUB_PAGES.SAVED_RECIPES
                              ? "Save to My Meals"
                              : "Save"
                          }`
                        )}
                      </MealForm.Button>
                    )}
                  </MealForm.ButtonGroup>
                </MealForm>
              </Form>
            </Formik>
          )}
        </Dialog>
      )}
    </>
  );
}
