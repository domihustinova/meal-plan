import React from "react";
import { useField } from "formik";
import {
  Container,
  Title,
  Text,
  Content,
  Row,
  Error,
  Input,
  InputContainer,
  InputButtonGroup,
  InputButtonContainer,
  Label,
  Submit,
} from "./styles/TdeeForm";

export default function TdeeForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

TdeeForm.Title = function TdeeFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

TdeeForm.Text = function TdeeFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

TdeeForm.Content = function TdeeFormContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

TdeeForm.Row = function TdeeFormRow({
  justify = "flex-start",
  children,
  ...restProps
}) {
  return (
    <Row justify={justify} {...restProps}>
      {children}
    </Row>
  );
};

TdeeForm.InputButtonContainer = function TdeeFormInputButtonContainer({
  name,
  label,
  options,
  children,
  error,
  ...restProps
}) {
  const [field, meta] = useField(name);
  return (
    <InputButtonContainer label={label}>
      <Label>{label}</Label>
      <InputButtonGroup>
        {options.map((option) => (
          <div>
            <input
              key={option.value}
              id={option.value}
              name={name}
              type="radio"
              value={option.value}
              checked={option.value === field.value}
              onChange={field.onChange}
              {...restProps}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </InputButtonGroup>
      {meta.error && meta.touched ? <Error>{meta.error}</Error> : null}
    </InputButtonContainer>
  );
};

TdeeForm.InputContainer = function TdeeFormInputContainer({
  id,
  name,
  label,
  placeholder,
  error,
  ...restProps
}) {
  const [field, meta] = useField(name);
  return (
    <InputContainer htmlFor={id}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type="number"
        label={label}
        value={field.value}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={(ev) => field.onBlur(ev)}
        {...restProps}
      />
      {meta.error && meta.touched ? <Error>{meta.error}</Error> : null}
    </InputContainer>
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
