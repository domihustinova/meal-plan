import React from "react";
import { Formik, Form } from "formik";

import { TdeeForm } from "../components";

import {
  genderOptions,
  activityOptions,
  validationSchemaForm,
} from "../services/consts";

export function TdeeFormContainer({ onFormSubmit }) {
  return (
    <Formik
      initialValues={{
        gender: "",
        age: "",
        weight: "",
        height: "",
        activity: "",
      }}
      validationSchema={validationSchemaForm}
      onSubmit={(values) => {
        onFormSubmit(values);
      }}
    >
      <Form>
        <TdeeForm>
          <TdeeForm.Title>
            Learn How Many Calories You Burn Every Day
          </TdeeForm.Title>
          <TdeeForm.Text>
            Use this calculator to learn your Total Daily Energy Expenditure, a
            measure of how many calories you burn per day.
          </TdeeForm.Text>
          <TdeeForm.Content>
            <TdeeForm.Row>
              <TdeeForm.InputButtonContainer
                name="gender"
                label="Gender"
                options={genderOptions}
              />
            </TdeeForm.Row>
            <TdeeForm.Row>
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
            <TdeeForm.Row>
              <TdeeForm.InputButtonContainer
                name="activity"
                label="Activity"
                options={activityOptions}
              />
            </TdeeForm.Row>
            <TdeeForm.Row justify="flex-end">
              <TdeeForm.Submit type="submit">Calculate</TdeeForm.Submit>
            </TdeeForm.Row>
          </TdeeForm.Content>
        </TdeeForm>
      </Form>
    </Formik>
  );
}
