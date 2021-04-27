import React from "react";
import { useField } from "formik";
import ReactTooltip from "react-tooltip";

import {
  Container,
  Content,
  Error,
  Frame,
  Image,
  Input,
  InputContainer,
  InputButtonGroup,
  InputButtonContainer,
  Label,
  Row,
  StyledButton,
  Submit,
  Text,
  TextContainer,
  Title,
} from "./styles/TdeeForm";

export default function TdeeForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

TdeeForm.Frame = function TdeeFormFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

TdeeForm.Title = function TdeeFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

TdeeForm.Text = function TdeeFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

TdeeForm.TextContainer = function TdeeFormTextContainer({
  children,
  ...restProps
}) {
  return <TextContainer {...restProps}>{children}</TextContainer>;
};

TdeeForm.Image = function TdeeFormImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

TdeeForm.Button = function TdeeFormButtonLink({
  themetype,
  size,
  children,
  ...restProps
}) {
  return (
    <StyledButton themetype={themetype} size={size} {...restProps}>
      {children}
    </StyledButton>
  );
};

TdeeForm.Content = function TdeeFormContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

TdeeForm.Row = function TdeeFormRow({ type, children, ...restProps }) {
  return (
    <Row type={type} {...restProps}>
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
          <div key={option.value}>
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
            <label htmlFor={option.value} data-tip data-for={option.value}>
              {option.label}
            </label>
            {option.tooltip && (
              <ReactTooltip
                id={option.value}
                type="info"
                effect="solid"
                multiline={true}
              >
                <span>{option.tooltip}</span>
              </ReactTooltip>
            )}
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
