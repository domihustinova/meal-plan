import React, { useState } from "react";
import { Formik, Form } from "formik";

import { TdeeForm } from "../components";
import illustration from "../images/illustration-form.svg";

import { GENDER_OPTIONS, ACTIVITY_OPTIONS } from "../constants/calculator";
import { validationSchemaTdeeForm } from "../helpers/validations";

export function TdeeFormContainer({ isFormSubmitted, onFormSubmit }) {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => setShowForm(true);

  return (
    <Formik
      initialValues={{
        gender: "",
        age: "",
        weight: "",
        height: "",
        activity: "",
      }}
      validationSchema={validationSchemaTdeeForm}
      onSubmit={(values) => {
        onFormSubmit(values);
      }}
    >
      <TdeeForm>
        <TdeeForm.Frame>
          <TdeeForm.Image src={illustration} />
          <TdeeForm.TextContainer>
            <TdeeForm.Title>
              Not ready to start with MealPal yet?
            </TdeeForm.Title>
            <TdeeForm.Text>
              Start small. Learn how many calories you burn every day - your
              Total Daily Energy Expenditure.
            </TdeeForm.Text>
            <TdeeForm.Button
              themetype="primaryPastelBlue"
              size="normal"
              onClick={handleButtonClick}
            >
              Calculate my TDEE
            </TdeeForm.Button>
          </TdeeForm.TextContainer>
        </TdeeForm.Frame>
        {showForm && (
          <TdeeForm.Content>
            <Form>
              <TdeeForm.Row type="radio">
                <TdeeForm.InputButtonContainer
                  name="gender"
                  label="Gender"
                  options={GENDER_OPTIONS}
                />
              </TdeeForm.Row>
              <TdeeForm.Row type="input">
                <TdeeForm.InputContainer
                  id="age"
                  name="age"
                  label="Age"
                  placeholder="Age"
                />
                <TdeeForm.InputContainer
                  id="weight"
                  name="weight"
                  label="Weight"
                  placeholder="Weight (kg)"
                />
                <TdeeForm.InputContainer
                  id="height"
                  name="height"
                  label="Height"
                  placeholder="Height (cm)"
                />
              </TdeeForm.Row>
              <TdeeForm.Row type="radio">
                <TdeeForm.InputButtonContainer
                  name="activity"
                  label="Activity"
                  options={ACTIVITY_OPTIONS}
                />
              </TdeeForm.Row>
              <TdeeForm.Row type="button">
                <TdeeForm.Submit
                  themetype="primaryPastelBlue"
                  size="normal"
                  type="submit"
                >
                  {isFormSubmitted ? "Recalculate" : "Calculate"}
                </TdeeForm.Submit>
              </TdeeForm.Row>
            </Form>
          </TdeeForm.Content>
        )}
      </TdeeForm>
    </Formik>
  );
}
