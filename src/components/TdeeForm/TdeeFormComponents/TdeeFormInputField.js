import React from "react";
import { useField } from "formik";
import InputField from "../../common/InputField";

const TdeeFormInputField = ({ id, name, type, label, placeholder }) => {
  const [field, meta] = useField(name);
  return (
    <InputField
      id={id}
      name={name}
      type={type}
      label={label}
      value={field.value}
      placeholder={placeholder}
      onChange={field.onChange}
      onBlur={(ev) => field.onBlur(ev)}
      error={meta.error && meta.touched ? meta.error : null}
    />
  );
};
export default TdeeFormInputField;
