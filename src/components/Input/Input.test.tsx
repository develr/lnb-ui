import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input Component", () => {
  it("deve renderizar o rótulo quando fornecido", () => {
    render(<Input label="Nome" />);
    expect(screen.getByText("Nome")).toBeInTheDocument();
  });

  it("deve renderizar o placeholder corretamente", () => {
    render(<Input placeholder="Digite seu nome" />);
    expect(screen.getByPlaceholderText("Digite seu nome")).toBeInTheDocument();
  });

  it("deve exibir uma mensagem de erro quando fornecida", () => {
    render(<Input error="Campo obrigatório" />);
    expect(screen.getByText("Campo obrigatório")).toBeInTheDocument();
  });

  it("deve atualizar o valor ao digitar", () => {
    render(<Input label="Nome" placeholder="Digite seu nome" />);
    const inputElement = screen.getByPlaceholderText("Digite seu nome") as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "John Doe" } });
    expect(inputElement.value).toBe("John Doe");
  });
});
