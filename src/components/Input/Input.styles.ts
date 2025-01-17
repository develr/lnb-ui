import styled from "@emotion/styled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

export const StyledInput = styled.input<{ hasError: boolean }>`
  padding: 10px 12px;
  border: 1px solid ${({ hasError }) => (hasError ? "red" : "#ccc")};
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? "red" : "#007BFF")};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;
