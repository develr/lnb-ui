import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { LnbThemeProvider } from "../../contexts/ThemeProvider";
import { lightTheme } from "../../theme/defaultTheme";
import { normalizeHex, rgbToHex } from "../../utils/rgbToHex";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<LnbThemeProvider theme={lightTheme}>{ui}</LnbThemeProvider>);
};

describe("Button Component", () => {
  it("deve renderizar o texto do botão", () => {
    renderWithTheme(<Button>Enviar</Button>);
    expect(screen.getByText("Enviar")).toBeInTheDocument();
  });

  it("deve disparar o evento onClick quando clicado", () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Clique aqui</Button>);

    const button = screen.getByText("Clique aqui");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("deve renderizar o botão desativado quando o atributo disabled for passado", () => {
    renderWithTheme(<Button disabled>Desativado</Button>);
    const button = screen.getByText("Desativado");

    expect(button).toBeDisabled();
  });

  it("deve aplicar a variante correta", () => {
    renderWithTheme(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText("Secondary");

    const computedStyle = getComputedStyle(button);

    const backgroundColorHex = normalizeHex(rgbToHex(computedStyle.backgroundColor));
    const colorHex = normalizeHex(rgbToHex(computedStyle.color));

    expect(backgroundColorHex).toBe(normalizeHex(lightTheme.colors.secondary.main));
    expect(colorHex).toBe(normalizeHex(lightTheme.colors.secondary.contrast));
  });

  it("deve aplicar a variante correta", () => {
    renderWithTheme(<Button variant="primary">Primary</Button>);
    const button = screen.getByText("Primary");

    const computedStyle = getComputedStyle(button);

    const backgroundColorHex = normalizeHex(rgbToHex(computedStyle.backgroundColor));
    const colorHex = normalizeHex(rgbToHex(computedStyle.color));

    expect(backgroundColorHex).toBe(normalizeHex(lightTheme.colors.primary.main));
    expect(colorHex).toBe(normalizeHex(lightTheme.colors.primary.contrast));
  });
});
