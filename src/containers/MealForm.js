import React, { useState, useContext } from "react";
import { Formik, Form } from "formik";

import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { FirestoreContext } from "../context/firestore";
import { MealForm } from "../components/";
import { mealTypeOtions } from "../constants/mealForm";
import { validationSchemaMealForm } from "../helpers/validations";

export function MealFormContainer({ uid, open, setOpen, meal, formType }) {
  const { db } = useContext(FirestoreContext);

  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const mealId = meal?.id;

  const saveMeal = (values) => {
    setIsLoading(true);
    const meal = {
      label: values.label,
      calories: values.calories,
      totalNutrients: {
        PROCNT: {
          label: "Protein",
          quantity: values.protein,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: values.carbs,
          unit: "g",
        },
        FAT: {
          label: "Fat",
          quantity: values.fat,
          unit: "g",
        },
      },

      yield: values.portions,
      mealType: values.mealType,
    };

    db.collection("meals")
      .doc(uid)
      .collection("userMeals")
      .doc(mealId || Math.random().toString(36).slice(2))
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
    label: meal?.label,
    calories: meal?.calories,
    protein: meal?.totalNutrients?.PROCNT.quantity,
    carbs: meal?.totalNutrients?.CHOCDF.quantity,
    fat: meal?.totalNutrients?.FAT.quantity,
    portions: meal?.yield,
    mealType: meal?.mealType,
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
                {`Meal was successfully ${
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
                  <MealForm.Title>{`${
                    formType === "add" ? "Add" : "Edit"
                  } meal`}</MealForm.Title>

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
                          "Save"
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
