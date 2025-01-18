import { configure } from "@testing-library/react";
import { beforeAll, afterAll } from "@jest/globals";
import "@testing-library/jest-dom";

configure({
  testIdAttribute: "data-testid",
});

const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) return;
    originalConsoleError(...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});
