import React from "react";
import { ButtonProps, StyledButton } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  return <StyledButton variant={variant} {...props} />;
};
