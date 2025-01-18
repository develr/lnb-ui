import React from 'react';
import { StyledSpinner } from './spinner';
import { useTheme } from '../../contexts/ThemeProvider';

export interface WithLoadingProps {
    isLoading?: boolean;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    loadingText?: string;
}

export interface SpinnerProps {
  variant?: "primary" | "secondary";
}
  

function Spinner({ variant = "primary" }: SpinnerProps) {
  const { theme } = useTheme();
  
  console.log(theme.colors[variant])
  return (
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
        stroke={theme.colors[variant]}
      />
    </StyledSpinner>
  )
}
  
export function withLoading<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  return ({
    isLoading = false,
    loadingText = "Carregando...",
    variant = "primary",
    children,
    ...props
  }: WithLoadingProps & T) => {
    return (
      <WrappedComponent
        {...(props as T)}
        disabled={isLoading || (props as any).disabled}
      >
        {isLoading ? <>{loadingText} <Spinner variant={variant} /></> : children}
      </WrappedComponent>
    );
  };
}
  