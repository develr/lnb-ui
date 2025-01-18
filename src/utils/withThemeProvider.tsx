import React from "react";
import { LnbThemeProvider } from "../contexts/ThemeProvider";
import { lightTheme } from "../theme/defaultTheme";

export const withThemeProvider = (Story: any, context: any) => {
    return (<LnbThemeProvider theme={lightTheme}><Story /></LnbThemeProvider>)
};