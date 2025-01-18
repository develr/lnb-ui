import type { Preview } from "@storybook/react";
import { withThemeProvider } from "../src/utils/withThemeProvider";

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  docs: {
    inlineStories: true,
  },
};

const preview: Preview = {
  parameters,
};

export default preview;
