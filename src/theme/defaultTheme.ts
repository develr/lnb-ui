export const lightTheme = {
  colors: {
    background: "#ffffff",
    text: "#000000",
    primary: { main: "#dc3545", contrast: "#fff" },
    secondary: { main: "#6C757D", contrast: "#fff" },
    border: "#DDDDDD",
  },
  spacing: (factor: number) => `${factor * 8}px`,
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "16px",
  },
};

export const darkTheme = {
  colors: {
    background: "#121212",
    text: "#ffffff",
    primary: { main: "#1E88E5", contrast: "#fff" },
    secondary: { main: "#8A8A8A", contrast: "#fff" },
    border: "#333333",
  },
  spacing: (factor: number) => `${factor * 8}px`,
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "16px",
  },
};

export type Theme = typeof lightTheme;
