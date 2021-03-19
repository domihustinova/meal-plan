import React from "react";
import { useField } from "formik";
import {
  Container,
  Error,
  Input,
  InputContainer,
  Select,
  SelectContainer,
  Label,
  Submit,
} from "./styles/TdeeForm";

export default function TdeeForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

TdeeForm.InputContainer = function TdeeFormInputContainer({
  id,
  name,
  type,
  label,
  placeholder,
  children,
  error,
  ...restProps
}) {
  const [field, meta] = useField(name);
  return (
    <InputContainer htmlFor={id}>
      <Label>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        label={label}
        value={field.value}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={(ev) => field.onBlur(ev)}
        error={meta.error && meta.touched ? meta.error : null}
        {...restProps}
      />
      <Error>{meta.error}</Error>
      {children}
    </InputContainer>
  );
};

TdeeForm.SelectContainer = function TdeeFormSelectContainer({
  name,
  label,
  value,
  options,
  placeholder,
  children,
  ...restProps
}) {
  const [field, meta] = useField(name);
  return (
    <SelectContainer>
      <Label>{label}</Label>
      <Select
        label={label}
        name={name}
        value={field.value}
        options={options}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={(ev) => field.onBlur(ev)}
        error={meta.error && meta.touched ? meta.error : null}
      >
        {placeholder && (
          <option label={placeholder} value="">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={`option-${option.key || option.value}`}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </Select>
      <Error>{meta.error}</Error>
      {children}
    </SelectContainer>
  );
};

TdeeForm.Submit = function TdeeFormSubmit({
  type,
  onClick,
  children,
  ...restProps
}) {
  return (
    <Submit type={type} onClick={onClick} {...restProps}>
      {children}
    </Submit>
  );
};
