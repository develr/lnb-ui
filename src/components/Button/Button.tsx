import React from "react";
import { ButtonProps, StyledButton } from "./Button.styles";
import { useTheme } from "../../contexts/ThemeProvider";

export const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  const { theme } = useTheme();

  return (
    <StyledButton variant={variant} theme={theme} {...props}>
      {children}
    </StyledButton>
  );
};
