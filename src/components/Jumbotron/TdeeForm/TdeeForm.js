import React from "react";
import { Formik, Form } from "formik";
import { Stack } from "@kiwicom/orbit-components";

import {
  genderOptions,
  activityOptions,
  validationSchema,
} from "./services/helpers";
import TdeeFormInputField from "./TdeeFormComponents/TdeeFormInputField";
import TdeeFormSelect from "./TdeeFormComponents/TdeeFormSelect";
import TdeeFormRadioGroup from "./TdeeFormComponents/TdeeFormRadioGroup";

import Button from "../../common/Button";

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
        // console.log(values);
        // resetForm();
      }}
    >
      {() => (
        <Form>
          <Stack spacing="large">
            {/* <TdeeFormRadioGroup name="gender" options={genderOptions} /> */}
            <Stack spacing="medium" direction="row">
              <TdeeFormSelect
                label="Gender"
                name="gender"
                placeholder="Gender"
                options={genderOptions}
              />
              <TdeeFormInputField
                id="age"
                name="age"
                type="number"
                label="Age"
                placeholder="Age"
              />
              <TdeeFormInputField
                id="weight"
                name="weight"
                type="number"
                label="Weight"
                placeholder="Weight (kg)"
              />
              <TdeeFormInputField
                id="height"
                name="height"
                type="number"
                label="Height"
                placeholder="Height (cm)"
              />
            </Stack>
            <Stack spacing="medium" direction="row">
              <TdeeFormSelect
                name="activity"
                placeholder="Activity"
                options={activityOptions}
              />

              <TdeeFormInputField
                id="bodyFat"
                name="bodyFat"
                type="number"
                label="Body Fat"
                placeholder="Body Fat (%)"
              />
            </Stack>
            <Stack justify="end">
              <Button type="submit">Calculate</Button>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default TdeeForm;
