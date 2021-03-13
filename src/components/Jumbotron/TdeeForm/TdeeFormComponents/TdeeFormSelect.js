import React from "react";
import { useField } from "formik";
import { Select } from "@kiwicom/orbit-components";

const TdeeFormSelect = ({ name, options, placeholder }) => {
  const [field, meta] = useField(name);
  return (
    <Select
      name={name}
      value={field.value}
      options={options}
      placeholder={placeholder}
      onChange={field.onChange}
      onBlur={(ev) => field.onBlur(ev)}
      error={meta.error && meta.touched ? meta.error : null}
    />
  );
};
export default TdeeFormSelect;
