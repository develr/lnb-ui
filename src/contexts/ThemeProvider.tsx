import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme, Theme } from "../theme/defaultTheme";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface LnbThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const LnbThemeProvider: React.FC<LnbThemeProviderProps> = ({
  children,
  theme = lightTheme,
}) => {
    const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  const toggleTheme = () => {
    setCurrentTheme((prev: any) => (prev === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <EmotionThemeProvider theme={currentTheme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a CustomThemeProvider");
  }
  return context;
};
