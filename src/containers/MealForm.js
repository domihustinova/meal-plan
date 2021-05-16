import React, { useContext } from "react";
import { Formik, Form } from "formik";

import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";

import { FirestoreContext } from "../context/firestore";
import { MealForm } from "../components/";
import { mealTypeOtions } from "../constants/mealForm";
import { validationSchemaMealForm } from "../helpers/validations";

export function MealFormContainer({ uid, open, setOpen }) {
  const { db } = useContext(FirestoreContext);

  const saveMeal = (values) => {
    const meal = {
      label: values.label,
      calories: values.calories,
      totalNutrients: [
        {
          label: "Protein",
          quantity: values.protein,
          unit: "g",
        },
        {
          label: "Carbs",
          quantity: values.carbs,
          unit: "g",
        },
        {
          label: "Fat",
          quantity: values.fat,
          unit: "g",
        },
      ],
      yield: values.portions,
      mealType: values.mealType,
      mealId: Math.random().toString(36).slice(2),
    };

    db.collection("meals")
      .doc(uid)
      .collection("userMeals")
      .doc(meal.mealId)
      .set(meal)
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = makeStyles(() => ({
    paper: { minWidth: "800px" },
  }))();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.paper }}
    >
      <Formik
        initialValues={{
          label: "",
          calories: "",
          protein: "",
          carbs: "",
          fat: "",
          portions: "",
          mealType: "",
        }}
        validationSchema={validationSchemaMealForm}
        onSubmit={(values) => {
          saveMeal(values);
        }}
      >
        <Form>
          <MealForm>
            <MealForm.Title>Add Meal</MealForm.Title>

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
              <MealForm.RowTitle>Macros (Protein/Carbs/Fat)</MealForm.RowTitle>

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
                Cancel
              </MealForm.Button>

              <MealForm.Button
                themetype="primaryGreen"
                size="normal"
                type="submit"
              >
                Add Meal
              </MealForm.Button>
            </MealForm.ButtonGroup>
          </MealForm>
        </Form>
      </Formik>
    </Dialog>
  );
}
