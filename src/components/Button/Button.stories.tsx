import React from "react";
import { Button, ButtonWithLoading } from ".";
import { WithLoadingProps } from "../../hoc/withLoading";
import { ButtonProps } from "./Button.styles";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    isLoading: {
      control: { type: "boolean" },
    },
    loadingText: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
  },
};

const Template = (args: React.JSX.IntrinsicAttributes & ButtonProps) => <Button {...args} />;
const LoadingTemplate = (args: React.JSX.IntrinsicAttributes & WithLoadingProps & ButtonProps) => <ButtonWithLoading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const WithLoading = LoadingTemplate.bind({});
WithLoading.args = {
  children: "Secondary Button",
  variant: "secondary",
  isLoading: true,
  loadingText: "Loading...",
};