import React from "react";
import { useField } from "formik";
import { ChoiceGroup, Radio } from "@kiwicom/orbit-components";

const TdeeFormRadioGroup = ({ name, options }) => {
  const [field, meta] = useField(name);
  return (
    <ChoiceGroup
      onChange={field.onChange}
      error={meta.error && meta.touched ? meta.error : null}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          checked={option.value === field.value}
          onChange={field.onChange}
        />
      ))}
    </ChoiceGroup>
  );
};
export default TdeeFormRadioGroup;
