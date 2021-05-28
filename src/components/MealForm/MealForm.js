import React from "react";
import { useField } from "formik";

import {
  Button,
  ButtonGroup,
  Card,
  InputButtonGroupContainer,
  InputButtonOption,
  InputButtonOptionGroup,
  InputContainer,
  Row,
  RowGroup,
  RowText,
  RowTitle,
  Input,
  Error,
  SuccessCard,
  SuccessCardText,
  SuccessCardTitle,
  Title,
} from "./styles/MealForm";

export default function MealForm({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
}

MealForm.SuccessCard = function MealFormSuccessCard({
  children,
  ...restProps
}) {
  return <SuccessCard {...restProps}>{children}</SuccessCard>;
};

MealForm.SuccessCardTitle = function MealFormSuccessCardTitle({
  children,
  ...restProps
}) {
  return <SuccessCardTitle {...restProps}>{children}</SuccessCardTitle>;
};

MealForm.SuccessCardText = function MealFormSuccessCardText({
  children,
  ...restProps
}) {
  return <SuccessCardText {...restProps}>{children}</SuccessCardText>;
};

MealForm.Title = function MealFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

MealForm.Row = function MealFormRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

MealForm.RowText = function MealFormRowText({ children, ...restProps }) {
  return <RowText {...restProps}>{children}</RowText>;
};

MealForm.RowTitle = function MealFormRowTitle({ children, ...restProps }) {
  return <RowTitle {...restProps}>{children}</RowTitle>;
};

MealForm.RowGroup = function MealFormRowGroup({ children, ...restProps }) {
  return <RowGroup {...restProps}>{children}</RowGroup>;
};

MealForm.Button = function MealFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

MealForm.ButtonGroup = function MealFormButtonGroup({
  children,
  ...restProps
}) {
  return <ButtonGroup {...restProps}>{children}</ButtonGroup>;
};

MealForm.InputContainer = function MealFormInputContainer({
  type,
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
      <Input
        id={id}
        name={name}
        type={type}
        label={label}
        value={field.value}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={(ev) => field.onBlur(ev)}
        autoComplete="off"
        {...restProps}
      />
      {meta.error && meta.touched ? <Error>{meta.error}</Error> : null}
    </InputContainer>
  );
};

MealForm.InputButtonGroupContainer =
  function MealFormInputButtonGroupContainer({
    name,
    options,
    children,
    error,
    ...restProps
  }) {
    const [field, meta] = useField(name);
    return (
      <InputButtonGroupContainer>
        <InputButtonOptionGroup>
          {options.map((option) => (
            <InputButtonOption
              type="button"
              name={name}
              key={option.value}
              id={option.value}
              value={option.value}
              selected={option.value === field.value}
              onClick={field.onChange}
              {...restProps}
            >
              {option.label}
            </InputButtonOption>
          ))}
        </InputButtonOptionGroup>
        {meta.error && meta.touched ? <Error>{meta.error}</Error> : null}
      </InputButtonGroupContainer>
    );
  };
