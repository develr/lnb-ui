import React from "react";
import { ButtonProps, StyledButton } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
