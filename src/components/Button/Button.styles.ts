import styled from "@emotion/styled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 30px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  background-color: ${({ variant, theme }: any) =>
    theme?.colors[variant]?.main};
  color: ${({ variant, theme }: any) => theme?.colors[variant]?.contrast};
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.04);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
