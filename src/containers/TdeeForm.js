import React from "react";
import { Formik, Form } from "formik";

import { TdeeForm } from "../components";

import { Stack } from "@kiwicom/orbit-components";

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
        console.log(values);
      }}
    >
      <Form>
        <Stack spacing="large">
          <TdeeForm>
            <Stack spacing="medium" direction="column">
              <TdeeForm.InputContainer
                id="age"
                name="age"
                type="number"
                label="Age"
                placeholder="Age"
              />
              <TdeeForm.InputContainer
                id="weight"
                name="weight"
                type="number"
                label="Weight"
                placeholder="Weight (kg)"
              />
              <TdeeForm.InputContainer
                id="height"
                name="height"
                type="number"
                label="Height"
                placeholder="Height (cm)"
              />
              <TdeeForm.SelectContainer
                label="Activity"
                name="activity"
                placeholder="Activity"
                options={activityOptions}
              />
            </Stack>
            <Stack justify="end">
              <TdeeForm.Submit type="submit">Calculate</TdeeForm.Submit>
            </Stack>
          </TdeeForm>
        </Stack>
      </Form>
    </Formik>
  );
}
