import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./Input";
import { InputProps } from "./Input.styles";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Your Name",
    placeholder: "Enter your name",
  },
} as Meta<InputProps>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {
  error: "This field is required",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: undefined,
};
