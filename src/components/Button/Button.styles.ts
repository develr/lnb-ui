import styled from "@emotion/styled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${({ variant }) =>
    variant === "secondary" ? "gray" : "blue"};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;
