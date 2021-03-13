import React from "react";
import { Formik, Form } from "formik";
import { Stack } from "@kiwicom/orbit-components";

import {
  genderOptions,
  activityOptions,
  validationSchema,
} from "./services/helpers";
import { StyledTdeeFormButton } from "./styles/TdeeForm";
import TdeeFormInputField from "./TdeeFormComponents/TdeeFormInputField";
import TdeeFormSelect from "./TdeeFormComponents/TdeeFormSelect";
import TdeeFormRadioGroup from "./TdeeFormComponents/TdeeFormRadioGroup";

const TdeeForm = ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={{
        gender: "",
        age: "",
        weight: "",
        height: "",
        activity: "",
        bodyFat: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        onFormSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <Stack spacing="large">
            <TdeeFormRadioGroup name="gender" options={genderOptions} />
            <Stack spacing="medium" direction="row">
              <TdeeFormInputField name="age" placeholder="Age" />
              <TdeeFormInputField name="weight" placeholder="Weight (kg)" />
              <TdeeFormInputField name="height" placeholder="Height (cm)" />
            </Stack>
            <Stack spacing="medium" direction="row">
              <TdeeFormSelect
                name="activity"
                placeholder="Activity"
                options={activityOptions}
              />
              <TdeeFormInputField name="bodyFat" placeholder="Body Fat (%)" />
            </Stack>
            <Stack justify="end">
              <StyledTdeeFormButton type="submit">
                Calculate
              </StyledTdeeFormButton>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default TdeeForm;
