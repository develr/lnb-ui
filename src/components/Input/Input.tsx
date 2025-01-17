import React from "react";
import { ErrorMessage, InputProps, StyledInput, StyledLabel, Wrapper } from "./Input.styles";

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <Wrapper>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <StyledInput hasError={!!error} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};
