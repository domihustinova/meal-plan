import React from "react";
import { useField } from "formik";
import { InputField } from "@kiwicom/orbit-components";

const TdeeFormInputField = ({ name, placeholder }) => {
  const [field, meta] = useField(name);
  return (
    <InputField
      name={name}
      type="number"
      value={field.value}
      placeholder={placeholder}
      onChange={field.onChange}
      onBlur={(ev) => field.onBlur(ev)}
      error={meta.error && meta.touched ? meta.error : null}
    />
  );
};
export default TdeeFormInputField;
